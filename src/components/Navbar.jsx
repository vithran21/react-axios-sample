import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/student-detail" style={{ marginRight: '10px' }}>Student Detail</Link>
      <Link to="/add-student">Add Student</Link>
    </nav>
  );
}
