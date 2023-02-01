import css from './Table.module.css';
import {
  selectAllTransactions,
  selectAllCategories,
  selectLoading,
} from 'redux/finance/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { NoTransactions } from 'components/NoTransactions/NoTransactions';
import { deleteTransaction } from 'redux/finance/transactionOperation';

import DeleteIcon from '@mui/icons-material/Delete';

import { IconButton } from '@mui/material';

const Table = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const transactions = useSelector(selectAllTransactions);
  const categories = useSelector(selectAllCategories);

  return (
    <div className={css.tableWrapper}>
      {loading && <Loader />}
      {transactions.length > 0 ? 
        <table className={css.tableContainer}>
          <tbody>
            <tr className={css.tableNameList}>
              <td className={css.tableNameItem}>Date</td>
              <td className={css.tableNameItem}>Type</td>
              <td className={css.tableNameItem}>Category</td>
              <td className={css.tableNameItem}>Comment</td>
              <td className={css.tableNameItem}>Sum</td>
              <td className={css.tableNameItem}>Balance</td>
              <td className={css.tableNameItem}></td>
            </tr>
            {transactions.map(item => {
              return (
                <tr className={css.tableValueList} key={item.id}>
                  <td className={css.tableValueItem}>
                    {item.transactionDate
                      .slice(2, item.transactionDate.length)
                      .split('-')
                      .reverse()
                      .join('.')}
                  </td>
                  <td className={css.tableValueItem}>
                    {item.type === 'INCOME' ? '+' : '-'}
                  </td>
                  <td className={css.tableValueItem}>
                    {categories.find(obj => obj.id === item.categoryId)?.name ??
                      'Other category'}
                  </td>
                  <td className={css.tableValueItem}>
                    {item.comment || 'No comment'}
                  </td>
                  <td
                    className={
                      item.type === 'INCOME'
                        ? css.tableSumIncome
                        : css.tableSumExpense
                    }
                  >
                    {item.amount.toFixed(2).toString().split('-').join('')}
                  </td>
                  <td className={css.tableValueItem}>
                    {item.balanceAfter.toFixed(2)}
                  </td>
                  <td className={css.tableValueItem}>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      color="inherit"
                      type="button"
                      onClick={() => {
                        const action = deleteTransaction(item);
                        dispatch(action);
                        console.log(item.id);
                      }}
                      variant="outlined"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
       : 
        <NoTransactions/>
      }
    </div>
  );
};

export default Table;
