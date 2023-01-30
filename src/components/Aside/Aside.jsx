import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import css from './Aside.module.css';
import Balance from 'components/Balance/Balance';
export function Aside() {
  return (
    <div className={css.aside}>
      <div>
        <Navigation />
        <Balance />
      </div>
      <Currency />
    </div>
  );
}
