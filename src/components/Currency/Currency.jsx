import { getCurrency } from 'services/currencyAPI';
import { useState, useEffect } from 'react';

export const Currency = () => {
  const [usd, setUsd] = useState({ rateBuy: 0, rateSell: 0 });
  const [eur, setEur] = useState({ rateBuy: 0, rateSell: 0 });

  const UAH_CODE = 980;
  const USD_CODE = 840;
  const EUR_CODE = 978;

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
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{usd.rateBuy.toFixed(2)}</td>
            <td>{usd.rateSell.toFixed(2)}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{eur.rateBuy.toFixed(2)}</td>
            <td>{eur.rateSell.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
