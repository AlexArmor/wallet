import css from './Table.module.css';
import {
  selectAllTransactions,
  selectAllCategories,
  selectLoading,
} from 'redux/finance/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

const Table = () => {
  const loading = useSelector(selectLoading);
  const transactions = useSelector(selectAllTransactions);
  const categories = useSelector(selectAllCategories);
  return (
      <div className={css.tableWrapper}>
        {loading && <Loader/>}
        <table className={css.tableContainer}>
          <tbody>
            <tr className={css.tableNameList}>
              <td className={css.tableNameItem}>Date</td>
              <td className={css.tableNameItem}>Type</td>
              <td className={css.tableNameItem}>Category</td>
              <td className={css.tableNameItem}>Comment</td>
              <td className={css.tableNameItem}>Sum</td>
              <td className={css.tableNameItem}>Balance</td>
            </tr>
            {transactions.map(item => {
              return (
                <tr className={css.tableValueList} key={item.id}>
                  <td className={css.tableValueItem}>{item.transactionDate.slice(2, item.transactionDate.length).split('-').reverse().join('.')}</td>
                  <td className={css.tableValueItem}>
                    {item.type === 'INCOME' ? '+' : '-'}
                  </td>
                  <td className={css.tableValueItem}>
                    {categories.find(obj => obj.id === item.categoryId )?.name ?? "Other category" }
                  </td>
                  <td className={css.tableValueItem}>{item.comment || 'No comment'}</td>
                  <td className={item.type === 'INCOME' ? css.tableSumIncome : css.tableSumExpense} >{item.amount.toString().split('-').join('') + '.00'}</td>
                  <td className={css.tableValueItem}>{item.balanceAfter + '.00'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};

export default Table;
