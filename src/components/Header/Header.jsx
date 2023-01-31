import { Link } from 'react-router-dom';
import Media from 'react-media';
import sprite from '../../icons/sprite.svg';
import styles from './Header.module.css';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalLogoutOpen } from 'redux/global/globalSlice';
import { selectUser } from 'redux/auth/selectors';

export const Header = () => {
  const user = useSelector(selectUser)
  const isModalLogoutOpen = useSelector(
    state => state.global.isModalLogoutOpen
  );
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(toggleModalLogoutOpen());
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerLinkWrapper}>
        <Link to="/">
          <svg className={styles.headerIcon}>
            <use href={sprite + '#wallet'}></use>
          </svg>
        </Link>
        <Link to="/">
          <h2 className={styles.headerTitle}>Wallet</h2>
        </Link>
      </div>
      <div className={styles.headerLogOutWrapper}>
        <p className={styles.headerLogOutName}>{user.username}</p>
        <button
          type="button"
          className={styles.headerLogOutBtn}
          onClick={handleOpen}
        >
          <svg className={styles.headerIconLogOut}>
            <use href={sprite + '#exit'}></use>
          </svg>
          <Media
            query="(min-width: 767px)"
            render={() => <p className={styles.headerLogOutExit}>Exit</p>}
          />
        </button>
      </div>
      {isModalLogoutOpen && <ModalLogout />}
    </header>
  );
};
