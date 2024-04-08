import React, { useState } from 'react';
import { post } from '../../utils/api_calls/handle_api_calls';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    post('/user/login', formData)
    .then( (response) => {
      const { token, user } = response.data;
      localStorage.setItem('current_user', JSON.stringify({ user: user, token: token }));
      navigate("/articles");
    })
    .catch(error => {
      console.log("Error while login: ", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
        />
      </div>
    
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
