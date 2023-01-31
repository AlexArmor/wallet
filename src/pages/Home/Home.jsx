import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';
import Media from 'react-media';
import Table from 'components/Table/Table';
import { MobileTransactionsList } from 'components/MobileTransationsList/MobileTransactionsList';
import Balance from 'components/Balance/Balance';

export default function Home() {
  const isModalAddTransactionOpen = useSelector(
    state => state.global.isModalAddTransactionOpen
  );
  return (
    <>
      <Media query="(max-width: 767px)" render={() => <Balance/>} />
      <Media query="(max-width: 767px)" render={() => <MobileTransactionsList/>}/>
      <Media query="(min-width: 768px)" render={() => <Table/>}/>
      <ButtonAddTransaction/>
      {/* <Media query="(max-width: 767px)" render={() => <Balance />} /> */}
      <ButtonAddTransaction />
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
