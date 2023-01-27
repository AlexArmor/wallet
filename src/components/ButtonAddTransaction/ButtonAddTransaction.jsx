import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';

const { useDispatch } = require('react-redux');

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModalAddTransactionOpen());
  };

  return (
    <button type="button" onClick={handleClose}>
      Open
    </button>
  );
};
export default ButtonAddTransaction;
