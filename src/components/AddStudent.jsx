import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new student object
    const newStudent = { name, email };

    // POST request to JSON server
    axios.post('http://localhost:5000/students', newStudent)
      .then((response) => {
        setMessage('Student added successfully!');
        setName('');
        setEmail('');
      })
      .catch((error) => {
        setMessage('Failed to add student. Please try again.');
      });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Navbar />
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '5px 10px' }}>Add Student</button>
      </form>
      {message && <p style={{ marginTop: '20px', color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}
