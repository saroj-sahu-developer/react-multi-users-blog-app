import React, { useState } from 'react';
import { registerUser } from '../../utils/handle_api_calls';

function RegisterForm() {
  const [formData, setFormData] = useState({});

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
    registerUser(formData);
  };

  const validateForm = () => {
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="password_confirmation" value={formData.password_confirmation || ''} onChange={handleChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
