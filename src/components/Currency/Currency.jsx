import { getCurrency } from 'services/privateAPI';
import { useState, useEffect } from 'react';

export const Currency = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    getCurrency()
      .then(data => {
        setImages({ data });
        setShowBtn(page < Math.ceil(total_results / per_page));
      })
      .catch(err => {});
  }, [page, query]);
};
