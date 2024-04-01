import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

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
    validateForm();
    makeApiCall();
  };

  const validateForm = () => {
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }
  }

  const makeApiCall = async() => {
    try {
      await axios.post(`http://127.0.0.1:3000/user/register`, formData)
      .then(response => {
        console.log(response);
        const { token } = response.data;
        localStorage.setItem('token', token);
      });
    } catch (error) {
      console.log('Error submitting register form:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
