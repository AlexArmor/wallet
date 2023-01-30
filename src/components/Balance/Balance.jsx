import css from './Balance.module.css';

const Balance = () => {
  return (
    <div className={css.balanceContainer}>
      <p className={css.balanceText}>Your balance</p>
      <p className={css.balanceItem}>
        ₴ <span className={css.balanceValue}>24 000.00</span>
      </p>
    </div>
  );
};

export default Balance;
