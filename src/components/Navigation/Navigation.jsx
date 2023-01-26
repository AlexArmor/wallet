import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/login">LoginPage</NavLink>
        </li>
        <li>
          <NavLink to="/register">RegisterPage</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">DashboardPage</NavLink>
        </li>
      </ul>
    </>
  );
}
