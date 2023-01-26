import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export default function Dashboard() {
  return (
    <ul>
      <li>
        <NavLink to="home">HomePage</NavLink>
      </li>
      <li>
        <NavLink to="statistics">StatisticsPage</NavLink>
      </li>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </ul>
  );
}
