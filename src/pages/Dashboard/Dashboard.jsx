import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Currency } from 'components/Currency/Currency';
export default function Dashboard() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="home">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="statistics">StatisticsPage</NavLink>
        </li>
      </ul>
      <Currency />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
