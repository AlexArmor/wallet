import { toStringWithSymbol } from 'services/addSymbol';
import css from './StatTable.module.css';

const backgroundColors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

export const StatTable = ({ stat }) => {
  console.log(stat);
  const income = stat.incomeSummary;
  console.log(income);
  const expences = stat.categoriesSummary.filter(el => el.type === 'EXPENSE');
  console.log(expences);
  const sumOfExpences = stat.expenseSummary;
  console.log(sumOfExpences);
  return (
    <>
      <div className={css.table}>
        <div className={css.head}>
          <p>Category</p>
          <p>Sum</p>
        </div>
        <ul>
          {expences.map((el, index) => {
            return (
              <li key={el.name} className={css.row}>
                <p className={css.label}>
                  <span className={css.color_icon}
                    style={{
                      backgroundColor: `${backgroundColors[index]}`,
                    }}
                  ></span>
                  {el.name}
                </p>
                <p>{toStringWithSymbol(el.total, " ").substring(1)}</p>
              </li>
            );
          })}
        </ul>
        <p className={css.summury}>
          Expenses:<span className={css.expenses}>{toStringWithSymbol(sumOfExpences, " ").substring(1)}</span>
        </p>
        <p className={css.summury}>
          Income:<span className={css.income}>{toStringWithSymbol(income, " ")}</span>
        </p>
      </div>
    </>
  );
};
