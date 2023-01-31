import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';
import Media from 'react-media';
import Table from 'components/Table/Table';
import { MobileTransactionsList } from 'components/MobileTransationsList/MobileTransactionsList';

export default function Home() {
  const isModalAddTransactionOpen = useSelector(
    state => state.global.isModalAddTransactionOpen
  );

  return (
    <>
      <Media query="(max-width: 767px)" render={() => <p>Total Balance</p>} />
      <Media query="(max-width: 767px)" render={() => <MobileTransactionsList/>}/>
      <Media query="(min-width: 768px)" render={() => <Table/>}/>
      <ButtonAddTransaction/>
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
