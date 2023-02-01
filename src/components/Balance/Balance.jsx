import { useSelector } from 'react-redux';
import css from './Balance.module.css';

const Balance = () => {
  const updatedBalance = useSelector(state => state.finance.totalBalance);
  return (
    <div className={css.balanceContainer}>
      <p className={css.balanceText}>YOUR BALANCE</p>
      <p className={css.balanceItem}>
        <span className={css.balanceIcon}>₴</span> {}
        <span className={css.balanceValue}>
          {!updatedBalance ? 0 : updatedBalance.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default Balance;
