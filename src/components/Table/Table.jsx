import css from './Table.module.css';
import { getAllTransaction } from 'redux/finance/transactionOperation';
import { useEffect } from 'react';
import {
  selectAllTransactions,
  selectAllCategories,
} from 'redux/finance/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch(); 
  useEffect( () => {
    dispatch( getAllTransaction());
  }, [dispatch]);
  const transactions = useSelector(selectAllTransactions);
  return (
    <>
      <div className={css.tableWrapper}>
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
{/*       <ul>
        <li>Date</li>
        <li>Type</li>
        <li>Category</li>
        <li>Comment</li>
        <li>Sum</li>
        <li>Balance</li>
      </ul>
      {transactions.map(item => {
        return (
          <ul>
            <li>{item.transactionDate.slice(2, item.transactionDate.length).split('-').reverse().join('.')}</li>
            <li>{item.type === 'INCOME' ? '+' : '-'}</li>
            <li>{categories.find(obj => obj.id === item.categoryId )?.name ?? "Other category" }</li>
            <li>{item.comment || 'No comment'}</li>
            <li>{item.amount.toString().split('-').join('') + '.00'}</li>
            <li>{item.balanceAfter + '.00'}</li>
          </ul>
        )
      })} */}
    </>
  );
};

export default Table;
