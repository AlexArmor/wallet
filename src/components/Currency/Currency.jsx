import { getCurrency } from 'services/privateAPI';
import { useEffect } from 'react';

export const Currency = () => {
  // const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    getCurrency()
      .then(data => {
        // setExchangeRates({ data });
        console.log(data);
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
            <td>27.55</td>
            <td>27.65</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>30.00</td>
            <td>30.10</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
