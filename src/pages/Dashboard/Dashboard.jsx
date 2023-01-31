import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Aside } from 'components/Aside/Aside';
import css from './Dashboard.module.css';
import { useDispatch } from 'react-redux';
import { getTransactionCategories } from 'redux/finance/transactionOperation';
import { getAllTransaction} from 'redux/finance/transactionOperation';

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className={css.dashboard}>
        <div>
          <Aside />
        </div>
      
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        
      </section>
    </>
  );
}
