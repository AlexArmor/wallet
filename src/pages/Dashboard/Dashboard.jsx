import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Aside } from 'components/Aside/Aside';
import css from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <>
      <Header />
      <section className={css.dashboard}>
        <div>
          <Aside />
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </>
  );
}
