import { useEffect } from 'react';
import { logOut } from 'redux/auth/authOperation';
import { toggleModalLogoutOpen } from 'redux/global/globalSlice';
import style from './ModalLogout.module.css';
import classNames from 'classnames';
const { createPortal } = require('react-dom');
const { useDispatch } = require('react-redux');
const modalRoot = document.querySelector('#modal-root');

const ModalLogout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModalLogoutOpen());
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [dispatch]);
  const handleOvarlayClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModalLogoutOpen());
    }
  };
  return createPortal(
    <div className={style.overlay} onClick={handleOvarlayClick}>
      <div className={style.modal}>
        <span className={style.exitQuestion}>
          Are you sure you want to exit the wallet?
        </span>

        <button
          className={classNames(style.btn, style.btnAgree)}
          type="button"
          onClick={() => {
            dispatch(toggleModalLogoutOpen());
            dispatch(logOut());
          }}
        >
          Yes{' '}
        </button>
        <button
          type="button"
          className={classNames(style.btn, style.btnDisagree)}
          onClick={() => {
            dispatch(toggleModalLogoutOpen());
          }}
        >
          No
        </button>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalLogout;
