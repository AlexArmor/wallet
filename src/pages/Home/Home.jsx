import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';

export default function Home() {
  const isModalAddTransactionOpen = useSelector(
    state => state.global.isModalAddTransactionOpen
  );

  return (
    <>
      <p>Home</p>
      <ButtonAddTransaction />
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
