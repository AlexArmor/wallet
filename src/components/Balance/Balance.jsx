// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllTransaction } from 'redux/finance/transactionOperation';
import css from './Balance.module.css';

const Balance = () => {
  const currentBalance = useSelector(state => state.auth.user.balance);
  const updatedBalance = useSelector(state => state.finance.totalBalance);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <div className={css.balanceContainer}>
      <p className={css.balanceText}>Your balance</p>
      <p className={css.balanceItem}>
        ₴ {}
        <span className={css.balanceValue}>
          {currentBalance ? currentBalance : updatedBalance}
        </span>
      </p>
    </div>
  );
};

export default Balance;
