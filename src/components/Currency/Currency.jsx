import { getCurrency } from 'services/currencyAPI';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import css from './Currency.module.css';

export const Currency = () => {
  const [usd, setUsd] = useState(
    () => JSON.parse(localStorage.getItem('usd')) ?? { rateBuy: 0, rateSell: 0 }
  );
  const [eur, setEur] = useState(
    () => JSON.parse(localStorage.getItem('eur')) ?? { rateBuy: 0, rateSell: 0 }
  );
  const [currencyLoading, setCurrencyLoading] = useState(false);

  const UAH_CODE = 980;
  const USD_CODE = 840;
  const EUR_CODE = 978;
  const ONE_HOUR = 3600000;
  const calculateTimeAndSetToLocalStorage = () => {
    getCurrency()
      .then(data => {
        setCurrencyLoading(false);
        const usdFind = data.find(
          ({ currencyCodeA, currencyCodeB }) =>
            currencyCodeA === USD_CODE && currencyCodeB === UAH_CODE
        );
        const eurFind = data.find(
          ({ currencyCodeA, currencyCodeB }) =>
            currencyCodeA === EUR_CODE && currencyCodeB === UAH_CODE
        );
        const actualTime = new Date();
        usdFind.date = actualTime.getTime();
        eurFind.date = actualTime.getTime();
        localStorage.setItem('usd', JSON.stringify(usdFind));
        localStorage.setItem('eur', JSON.stringify(eurFind));
        setUsd(usdFind);
        setEur(eurFind);
      })
      .catch(err => {
        setCurrencyLoading(false);
        console.log(err.message);
      });
  };

  useEffect(() => {
    setCurrencyLoading(true);
    if (JSON.parse(localStorage.getItem('usd')) === null) {
      calculateTimeAndSetToLocalStorage();
    } else if (JSON.parse(localStorage.getItem('usd')) !== null) {
      const { date } = JSON.parse(localStorage.getItem('usd'));
      const currentDate = new Date();
      const deltaTime = currentDate.getTime() - date;
      if (deltaTime > ONE_HOUR) {
        calculateTimeAndSetToLocalStorage();
      } else {
        setCurrencyLoading(false);
      }
    }
  }, []);

  return (
    <div className={css.loaderWrap}>
      {currencyLoading ? (
        <Loader />
      ) : (
        <div className={css.wrapTable}>
          <table className={css.tableCurrency}>
            <thead className={css.tableHead}>
              <tr className={css.tableTitle}>
                <th className={css.tableItemHead}>Currency</th>
                <th className={css.tableItemHead}>Purchase</th>
                <th className={css.tableItemHead}>Sale</th>
              </tr>
            </thead>
            <tbody className={css.tableBody}>
              <tr className={css.tableList}>
                <td className={css.tableItem}>USD</td>
                <td className={css.tableItem}>{usd.rateBuy.toFixed(2)}</td>
                <td className={css.tableItem}>{usd.rateSell.toFixed(2)}</td>
              </tr>
              <tr className={css.tableList}>
                <td className={css.tableItem}>EUR</td>
                <td className={css.tableItem}>{eur.rateBuy.toFixed(2)}</td>
                <td className={css.tableItem}>{eur.rateSell.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
