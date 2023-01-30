import Media from 'react-media';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import css from './Aside.module.css';
export function Aside() {
  return (
    <div className={css.aside}>
      <div>
        <Navigation />
        <Media query="(min-width: 767px)" render={() => <Balance />} />
      </div>
      <Media query="(min-width: 767px)" render={() => <Currency />} />
    </div>
  );
}
