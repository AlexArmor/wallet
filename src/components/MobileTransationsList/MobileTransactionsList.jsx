import css from './MobileTransactionsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransaction } from 'redux/finance/transactionOperation';
import { useEffect } from 'react';
import {
  selectAllTransactions,
  selectAllCategories,
} from 'redux/finance/selectors';

export const MobileTransactionsList = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);
  const transactions = useSelector(selectAllTransactions);
  return (
    <div className={css.containerMobile}>
      <ul className={css.tableListMobile}>
        {transactions.map(item => {
          return (
           <li className={css.cardListItem} key={item.id}>
                <ul className={css.cardListItemList}>
                  <li className={css.tableItemMobile}>
                    <div className={item.type === 'INCOME' ? css.tableItemMobileBlockGreen : css.tableItemMobileBlock}>
                        <span className={css.itemNameMobile}>Date</span>
                        <span className={css.itemValueMobile}>{item.transactionDate.slice(2, item.transactionDate.length).split('-').reverse().join('.')}</span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div className={item.type === 'INCOME' ? css.tableItemMobileBlockGreen : css.tableItemMobileBlock} >
                        <span className={css.itemNameMobile}>Type</span>
                        <span className={css.itemValueMobile}>{item.type === 'INCOME' ? '+' : '-'}</span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div className={item.type === 'INCOME' ? css.tableItemMobileBlockGreen : css.tableItemMobileBlock} >
                        <span className={css.itemNameMobile}>Category</span>
                        <span className={css.itemValueMobile}>{categories.find(obj => obj.id === item.categoryId )?.name ?? "" }</span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div className={item.type === 'INCOME' ? css.tableItemMobileBlockGreen : css.tableItemMobileBlock} >
                        <span className={css.itemNameMobile}>Comment</span>
                        <span className={css.itemValueMobile}>{item.comment || 'No comment'}</span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div className={item.type === 'INCOME' ? css.tableItemMobileBlockGreen : css.tableItemMobileBlock} >
                        <span className={css.itemNameMobile}>Sum</span>
                        <span className={item.type === 'INCOME' ? css.itemSumIncome : css.itemSumExpense} >{item.amount.toString().split('-').join('')}</span>
                    </div>
                  </li>
                  <li className={css.tableItemMobile}>
                    <div className={item.type === 'INCOME' ? css.tableItemMobileBlockGreen : css.tableItemMobileBlock} >
                        <span className={css.itemNameMobile}>Balance</span>
                        <span className={css.itemValueMobile}>{item.balanceAfter}</span>
                    </div>
                  </li>
                </ul>
           </li>
          );
        })}
      </ul>
    </div>
  );
};
