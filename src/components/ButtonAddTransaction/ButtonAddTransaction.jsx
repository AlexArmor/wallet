import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';

const { useDispatch } = require('react-redux');

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(toggleModalAddTransactionOpen());
  };

  return (
    <button type="button" onClick={handleOpen}>
      Open
    </button>
  );
};
export default ButtonAddTransaction;
