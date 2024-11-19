import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

export default function StudentDetail() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all students from the JSON server
    axios
      .get('http://localhost:5000/students')
      .then((response) => {
        setStudents(response.data); // Set the fetched students
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching student details:', err); // Log error details
        setError('Failed to fetch student details.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Navbar />
      <h1>Student Details</h1>
      {students.length > 0 ? (
        <table
          style={{
            margin: 'auto',
            borderCollapse: 'collapse',
            width: '80%',
            textAlign: 'left',
            border: '1px solid #ccc',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', borderBottom: '2px solid #ccc' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}
