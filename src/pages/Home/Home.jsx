import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';
import Media from 'react-media';
import Table from 'components/Table/Table';

export default function Home() {
  const isModalAddTransactionOpen = useSelector(
    state => state.global.isModalAddTransactionOpen
  );

  return (
    <>
      <Media query="(max-width: 767px)" render={() => <p>Total Balance</p>} />
      <Table query="(max-device-width: 768px)" />
      <ButtonAddTransaction />
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
