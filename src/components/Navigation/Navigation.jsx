import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import sprite from '../../icons/sprite.svg';

export function Navigation() {
  return (
    <>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.navLinkActive : css.navLink
            }
          >
            <svg className={css.icon}>
              <use href={sprite + '#home'}></use>
            </svg>
            <p className={css.navText}>Home</p>
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.navLinkActive : css.navLink
            }
            to="statistics"
          >
            <svg className={css.icon}>
              <use href={sprite + '#schedule'}></use>
            </svg>
            <p className={css.navText}>Statistics</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
