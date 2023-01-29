import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import css from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <>
      <Header />
      <section className={css.dashboard}>
        <ul>
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink to="statistics">StatisticsPage</NavLink>
          </li>
        </ul>
        <Currency />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
}
