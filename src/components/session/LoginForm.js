import React, { useState } from 'react';
import { post } from '../../utils/api_calls/handle_api_calls';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({validationError: '', serverError: ''});

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

    if(!validateForm()) {
      return;
    }

    post('/user/login', formData)
    .then( (response) => {
      const { token, user } = response.data;
      localStorage.setItem('current_user', JSON.stringify({ user: user, token: token }));
      navigate("/articles");
    })
    .catch(error => {
      console.log("Error while login: ", error);
      if (error.response.status === 401) {
        setError({serverError: 'Invalid email or password. Please try again.' });
      } else {
        setError({serverError: 'An error occurred. Please try again later.' });
      }
    });
  };

  const validateForm = () => {
    let isValid = true;
    if(!formData.password || formData.password.length < 6) {
      setError(({validationError: "Password can't be blank or less than 6 characters."}));

      isValid = false;
    }
    return isValid;
  }

  return (
    <>
      {error.serverError && <div>{error.serverError}</div>}
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
        {error.validationError && <div>{error.validationError}</div>}

        <button type="submit">Login</button>
    </form>
    </>
  );
};

export default LoginForm;
