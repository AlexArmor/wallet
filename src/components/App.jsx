import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import Statistics from 'pages/Statistics';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<p></p>} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};
