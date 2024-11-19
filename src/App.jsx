import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import StudentDetail from './components/StudentDetail';
import AddStudent from './components/AddStudent';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/student-detail', element: <StudentDetail /> },
  { path: '/add-student', element: <AddStudent /> }, 
]);

export default function App() {
  return <div>React Axios App</div>;
}
