import { getCurrency } from 'services/currencyAPI';
import { useState, useEffect } from 'react';
import css from './Currency.module.css';

export const Currency = () => {
  const [usd, setUsd] = useState({ rateBuy: 0, rateSell: 0 });
  const [eur, setEur] = useState({ rateBuy: 0, rateSell: 0 });

  const UAH_CODE = 980;
  const USD_CODE = 840;
  const EUR_CODE = 978;

  let currencyLoading = false;

  useEffect(() => {
    getCurrency()
      .then(data => {
        setUsd(
          data.find(
            ({ currencyCodeA, currencyCodeB }) =>
              currencyCodeA === USD_CODE && currencyCodeB === UAH_CODE
          )
        );
        setEur(
          data.find(
            ({ currencyCodeA, currencyCodeB }) =>
              currencyCodeA === EUR_CODE && currencyCodeB === UAH_CODE
          )
        );
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {currencyLoading ? (
        <p>Loading process</p>
      ) : (
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
      )}
    </>
  );
};
