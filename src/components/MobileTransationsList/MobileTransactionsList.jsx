import css from './MobileTransactionsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllTransactions,
  selectAllCategories,
  selectLoading,
} from 'redux/finance/selectors';
import { Loader } from 'components/Loader/Loader';
import { NoTransactions } from 'components/NoTransactions/NoTransactions';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { deleteTransaction } from 'redux/finance/transactionOperation';
export const MobileTransactionsList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  const transactions = useSelector(selectAllTransactions);
  const loading = useSelector(selectLoading);
  return (
    <div className={css.containerMobile}>
      {loading && <Loader />}
      {transactions.length > 0 ? (
        <ul className={css.tableListMobile}>
          {transactions.map(item => {
            return (
              <li className={css.cardListItem} key={item.id}>
                <ul className={css.cardListItemList}>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}>Date</span>
                      <span className={css.itemValueMobile}>
                        {item.transactionDate
                          .slice(2, item.transactionDate.length)
                          .split('-')
                          .reverse()
                          .join('.')}
                      </span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}>Type</span>
                      <span className={css.itemValueMobile}>
                        {item.type === 'INCOME' ? '+' : '-'}
                      </span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}>Category</span>
                      <span className={css.itemValueMobile}>
                        {categories.find(obj => obj.id === item.categoryId)
                          ?.name ?? ''}
                      </span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}>Comment</span>
                      <span className={css.itemValueMobile}>
                        {item.comment || 'No comment'}
                      </span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}>Sum</span>
                      <span
                        className={
                          item.type === 'INCOME'
                            ? css.itemSumIncome
                            : css.itemSumExpense
                        }
                      >
                        {item.amount.toString().split('-').join('')}
                      </span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}>Balance</span>
                      <span className={css.itemValueMobile}>
                        {item.balanceAfter}
                      </span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div
                      className={
                        item.type === 'INCOME'
                          ? css.tableItemMobileBlockGreen
                          : css.tableItemMobileBlock
                      }
                    >
                      <span className={css.itemNameMobile}></span>
                      <span className={css.itemValueMobile}>
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
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      ) : (
        <NoTransactions />
      )}
    </div>
  );
};
