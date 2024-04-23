import React, { useState } from 'react';
import axios from '../utils/axios';

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    password: '',
    bio: '',
    is_private: true // Default value for is_private
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kirim data registrasi ke backend
      const response = await axios.post('auth/register', formData);
      console.log('Registration successful:', response.data);
      // Redirect ke halaman login atau halaman lain yang sesuai setelah registrasi berhasil
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='full_name'>Full Name</label>
        <input
          type='text'
          id='full_name'
          name='full_name'
          value={formData.full_name}
          onChange={handleChange}
          required
        />
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor='bio'>Bio</label>
        <input
          type='text'
          id='bio'
          name='bio'
          value={formData.bio}
          onChange={handleChange}
        />
        
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
