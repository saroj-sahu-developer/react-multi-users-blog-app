import React, { useState } from 'react';
import { post } from '../../utils/api_calls/handle_api_calls';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState({});

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

    post('/user/register', formData)
    .then( (response) => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/articles');
    })
    .catch(error => {
      console.log("Error while registering user: ", error);
    });
  };

  const validateForm = () => {
    const errors = {};
  
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
  
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    // Password confirmation validation
    if (!formData.password_confirmation) {
      errors.password_confirmation = 'Password confirmation is required';
    } else if (formData.password_confirmation !== formData.password) {
      errors.password_confirmation = 'Passwords do not match';
    }
  
    setError(errors);

    return Object.keys(errors).length === 0;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {error.name && <div className="error">{error.name}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {error.email && <div className="error">{error.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {error.password && <div className="error">{error.password}</div>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
        {error.password_confirmation && <div className="error">{error.password_confirmation}</div>}
      </div>
      <button type="submit">Register</button>
    </form>  
  );
}

export default RegisterForm;
