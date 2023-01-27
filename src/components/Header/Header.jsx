import { Link } from 'react-router-dom';
import sprite from '../../icons/sprite.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.linkWrapper}>
        <Link>
          <svg className={styles.headerIcon}>
            <use href={sprite + '#wallet'}></use>
          </svg>
        </Link>
        <Link>
          <h2 className={styles.title}>Wallet</h2>
        </Link>
      </div>
      <div>
        <p>Name</p>
        <Link>
          <svg className={styles.iconLogOut}>
            <use href={sprite + '#exit'}></use>
          </svg>
        </Link>
      </div>
    </header>
  );
};
