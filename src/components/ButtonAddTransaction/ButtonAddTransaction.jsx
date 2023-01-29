import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import sprite from '../../icons/sprite.svg';
import style from './ButtonAddTransaction.module.css';
const { useDispatch } = require('react-redux');

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(toggleModalAddTransactionOpen());
  };

  return (
    <button type="button" onClick={handleOpen} className={style.addBtn}>
      <svg className={style.addIcon}>
        <use href={sprite + '#plus'}></use>
      </svg>
    </button>
  );
};
export default ButtonAddTransaction;
