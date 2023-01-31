import style from './ModalAddTransaction.module.css';
import Datetime from 'react-datetime';
import sprite from '../../icons/sprite.svg';
import 'react-datetime/css/react-datetime.css';
export const DatetimeAddTransaction = props => {
  return (
    <Datetime
      {...props}
      renderInput={(props, openCalendar, closeCalendar) => (
        <label
          style={{ position: 'relative', width: '100%', display: 'block' }}
          onClick={() => {
            closeCalendar();
          }}
        >
          {' '}
          <input {...props} className={style.dateInput} />
          <svg className={style.dateIcon}>
            <use href={sprite + '#calendar'}></use>
          </svg>
        </label>
      )}
      dateFormat="YYYY-MM-DD"
      timeFormat={false}
      initialValue={new Date()}
    />
  );
};
