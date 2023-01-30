import Media from 'react-media';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import css from './Aside.module.css';
export function Aside() {
  return (
    <div className={css.aside}>
      <div>
        <Navigation />
        <Media query="(min-width: 767px)" render={() => <p>Total Balance</p>} />
      </div>
      <Media query="(min-width: 767px)" render={() => <Currency />} />
    </div>
  );
}
