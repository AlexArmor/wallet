import css from './MobileTransactionsList.module.css';
import { useSelector } from 'react-redux';
import {
  selectAllTransactions,
  selectAllCategories,
  selectLoading,
} from 'redux/finance/selectors';
import { Loader } from 'components/Loader/Loader';

export const MobileTransactionsList = () => {
  const categories = useSelector(selectAllCategories);

  const transactions = useSelector(selectAllTransactions);
  const loading = useSelector(selectLoading);
  return (
    <>
      {transactions.length > 0 ? (
        <div className={css.containerMobile}>
          {loading && <Loader />}
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
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={css.textNoTransactionsWrapperMob}>
          <p className={css.textNoTransactionsMob}>
            Oops, there is no trasactions, yet.
          </p>
          <p className={css.textNoTransactionsMob}>
            To add new transaction click on the "Plus"!
          </p>
        </div>
      )}
    </>
  );
};
