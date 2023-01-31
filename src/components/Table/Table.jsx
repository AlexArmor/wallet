import css from './Table.module.css';

const Table = () => {
  return (
    <>
      <table className={css.tableContainer}>
        <tr className={css.tableNameList}>
          <td className={css.tableNameItem}>Date</td>
          <td className={css.tableNameItem}>Type</td>
          <td className={css.tableNameItem}>Category</td>
          <td className={css.tableNameItem}>Comment</td>
          <td className={css.tableNameItem}>Sum</td>
          <td className={css.tableNameItem}>Balance</td>
        </tr>
        <tr className={css.tableValueList}>
          <td className={css.tableValueItem}>04.01.19</td>
          <td className={css.tableValueItem}>-</td>
          <td className={css.tableValueItem}>Other</td>
          <td className={css.tableValueItem}>Gift for your wife</td>
          <td className={css.tableValueItem}>300.00</td>
          <td className={css.tableValueItem}>6900.00</td>
        </tr>
      </table>
      <div className={css.containerMobile}>
        <ul className={css.tableListMobile}>
          <li className={css.tableItemMobile}>
            <span className={css.itemNameMobile}>Date</span>
            <span className={css.itemValueMobile}>04.01.19</span>
          </li>
          <li className={css.tableItemMobile}>
            <span className={css.itemNameMobile}>Type</span>
            <span className={css.itemValueMobile}>-</span>
          </li>
          <li className={css.tableItemMobile}>
            <span className={css.itemNameMobile}>Category</span>
            <span className={css.itemValueMobile}>Other</span>
          </li>
          <li className={css.tableItemMobile}>
            <span className={css.itemNameMobile}>Comment</span>
            <span className={css.itemValueMobile}>Gift for your wife</span>
          </li>
          <li className={css.tableItemMobile}>
            <span className={css.itemNameMobile}>Sum</span>
            <span className={css.itemValueMobile}>300.00</span>
          </li>
          <li className={css.tableItemMobile}>
            <span className={css.itemNameMobile}>Balance</span>
            <span className={css.itemValueMobile}>6 900.00</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Table;
