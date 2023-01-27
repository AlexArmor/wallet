import { Link } from 'react-router-dom';
import Media from 'react-media';
import sprite from '../../icons/sprite.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLinkWrapper}>
        <Link to="home">
          <svg className={styles.headerIcon}>
            <use href={sprite + '#wallet'}></use>
          </svg>
        </Link>
        <Link to="home">
          <h2 className={styles.headerTitle}>Wallet</h2>
        </Link>
      </div>
      <div className={styles.headerLogOutWrapper}>
        <p className={styles.headerLogOutName}>Name</p>
        <button type='button' className={styles.headerLogOutBtn}>
          <svg className={styles.headerIconLogOut}>
            <use href={sprite + '#exit'}></use>
          </svg>
          <Media query="(min-width: 767px)" render={() =>
          (
            <p className={styles.headerLogOutExit}>Exit</p>
          )}
        />
        </button>
      </div>
    </header>
  );
};
