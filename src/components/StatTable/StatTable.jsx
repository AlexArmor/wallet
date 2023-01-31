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
                <p>
                  <span
                    style={{
                      backgroundColor: `${backgroundColors[index]}`,
                      display: 'block',
                      width: '10px',
                      height: '10px'
                    }}
                  ></span>
                  {el.name}
                </p>
                <p>{el.total}</p>
              </li>
            );
          })}
        </ul>
        <p className={css.summury}>
          Expenses:<span className={css.expenses}>{sumOfExpences}</span>
        </p>
        <p className={css.summury}>
          Income:<span className={css.income}>{income}</span>
        </p>
      </div>
    </>
  );
};
