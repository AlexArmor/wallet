import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/finance/transactionOperation';
import { createPortal } from 'react-dom';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './ModalAddTransaction.module.css';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import sprite from '../../icons/sprite.svg';
import { Switch, Select } from 'formik-mui';
import { MenuItem, stepLabelClasses, Typography } from '@mui/material';

const modalRoot = document.querySelector('#modal-root');

const validationSchema = yup.object().shape({
  type: yup.string().required('Required'),
  categoryId: yup.string().required('Required'),
  transactionDate: yup.string().required('Required'),
  amount: yup.number().required('Required'),
  comment: yup.string(),
});
const customRenderInput = ({ props, openCalendar, closeCalendar }) => {
  console.log(props);

  return (
    <div>
      <input {...props} />
      <button onClick={openCalendar}>open calendar</button>
      <button onClick={closeCalendar}>close calendar</button>
    </div>
  );
};

const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.finance.categories);
  const expenseCategories = categories.filter(
    category => category.type !== 'INCOME'
  );
  const incomeCategory = categories.find(
    category => category.type === 'INCOME'
  );

  const handleSubmitAddTransaction = (value, actions) => {
    const dataForRequest = {
      type: value.type,
      amount: value.type === 'EXPENSE' ? -value.amount : value.amount,
      categoryId:
        value.type === 'EXPENSE'
          ? value.categoryId !== incomeCategory.id
            ? value.categoryId
            : expenseCategories[0].id
          : incomeCategory.id,
      comment: value.comment,
      transactionDate: value.transactionDate,
    };

    dispatch(addTransaction(dataForRequest));
    actions.resetForm();
    dispatch(toggleModalAddTransactionOpen());
  };

  const overlayClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModalAddTransactionOpen());
    }
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModalAddTransactionOpen());
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [dispatch]);
  // new Date().toISOString().substring(0, 10)
  return createPortal(
    <div className={style.overlay} onClick={overlayClick}>
      <div className={style.modal}>
        <Formik
          initialValues={{
            type: 'EXPENSE',
            categoryId: incomeCategory.id,
            amount: '',
            transactionDate: new Date().toISOString().substring(0, 10),
            comment: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitAddTransaction}
        >
          {({ values }) => {
            return (
              <Form className={style.form}>
                <h1 className={style.title}> Add transaction</h1>
                <Typography>Income</Typography>
                <Field
                  component={Switch}
                  defaultChecked={true}
                  // type="checkbox"
                  name="type"
                  onChange={e => {
                    if (e.target.checked) {
                      values.type = 'EXPENSE';
                      e.target.value = 'EXPENSE';
                    } else values.type = 'INCOME';
                    e.target.value = 'INCOME';
                  }}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography>Expense</Typography>
                <ErrorMessage name="type" />
                {values.type === 'EXPENSE' && (
                  <Field
                    component="select"
                    name="categoryId"
                    onChange={e => {
                      values.categoryId = e.target.value;
                    }}
                    className={style.selectInput}
                  >
                    <option
                      value={incomeCategory.id}
                      className={style.firstSelectItem}
                      disabled
                      hidden
                    >
                      Select a category
                    </option>
                    {expenseCategories.length !== 0 &&
                      expenseCategories.map(category => (
                        <option
                          key={category.id}
                          value={category.id}
                          className={style.selectItem}
                        >
                          {category.name}{' '}
                        </option>
                      ))}
                  </Field>
                )}
                <Field
                  type="number"
                  name="amount"
                  className={style.amountInput}
                  placeholder="0.00"
                />
                <ErrorMessage name="amount" />
                <Datetime
                  renderInput={(props, openCalendar, closeCalendar) => (
                    <label
                      style={{ position: 'relative' }}
                      onClick={closeCalendar}
                    >
                      {' '}
                      <input
                        {...props}
                        onChange={closeCalendar}
                        className={style.dateInput}
                      />
                      <svg className={style.dateIcon}>
                        <use href={sprite + '#calendar'}></use>
                      </svg>
                    </label>
                  )}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  initialValue={new Date()}
                  onChange={e => {
                    console.log(e);
                    values.transactionDate = e.toISOString().substring(0, 10);

                    console.log(values);
                  }}
                />
                <ErrorMessage name="transactionDate" />
                <Field
                  type="text"
                  name="comment"
                  className={style.commentInput}
                  placeholder="Comment"
                />
                <ErrorMessage name="comment" />
                <button type="submit" className={style.btnAgree}>
                  ADD
                </button>
                <button
                  type="button"
                  className={style.btnDisagree}
                  onClick={() => {
                    dispatch(toggleModalAddTransactionOpen());
                  }}
                >
                  CANCEL
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalAddTransaction;
