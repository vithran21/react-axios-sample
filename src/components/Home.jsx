import React from 'react';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <p>Click on "Student Detail" to view student information.</p>
    </div>
  );
}
