import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Dashboard from 'pages/Dashboard/Dashboard';
import Statistics from 'pages/Statistics/Statistics';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};
