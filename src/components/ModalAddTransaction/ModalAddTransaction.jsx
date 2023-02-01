import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/finance/transactionOperation';
import { createPortal } from 'react-dom';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './ModalAddTransaction.module.css';
import * as yup from 'yup';
import { MaterialUISwitch } from './SwitchModalComponent';
import { TextareaAutosize, Typography } from '@mui/material';
import { DatetimeAddTransaction } from './DatetimeAddTransaction';
import { GrClose } from 'react-icons/gr';
import { UnstyledSelectSimple } from './SelectAddTransaction';
import Media from 'react-media';
import classNames from 'classnames';

const modalRoot = document.querySelector('#modal-root');

const validationSchema = yup.object().shape({
  type: yup.string().required('Required'),
  categoryId: yup.string().required('Required'),
  transactionDate: yup.string().required('Required'),
  amount: yup.number().required('Required'),
  comment: yup.string(),
});

const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.finance.categories);
  const expenseCategories = categories.filter(
    category => category.type !== 'INCOME'
  );

  const incomeCategory = categories.find(
    category => category.type === 'INCOME'
  );

  const initialValues = {
    type: 'EXPENSE',
    categoryId: incomeCategory.id,
    amount: '',
    transactionDate: new Date().toISOString().substring(0, 10),
    comment: '',
  };

  const [type, setType] = useState('EXPENSE');
  const [categoryId, setCategoryId] = useState('');

  const handleSetCatedory = id => {
    setCategoryId(id);
  };

  const handleSubmitAddTransaction = (value, actions) => {
    const dataForRequest = {
      type: value.type,
      amount: value.type === 'EXPENSE' ? -value.amount : value.amount,
      categoryId:
        value.type === 'EXPENSE'
          ? categoryId !== incomeCategory.id
            ? categoryId
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

  return createPortal(
    <div className={style.overlay} onClick={overlayClick}>
      <div className={style.modal}>
        <Media
          query="(min-width: 767px)"
          render={() => (
            <button
              type="button"
              className={style.closeBtn}
              onClick={() => {
                dispatch(toggleModalAddTransactionOpen());
              }}
            >
              <GrClose />
            </button>
          )}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitAddTransaction}
        >
          {({ values, errors, touched }) => {
            return (
              <Form className={style.form}>
                <h1 className={style.title}> Add transaction</h1>
                <div className={style.toggleTypeBlock}>
                  {' '}
                  <Typography
                    className={style.typeItem}
                    sx={{ color: type === 'INCOME' ? '#24cca7 ' : '#000000' }}
                  >
                    Income
                  </Typography>
                  <Field
                    component={MaterialUISwitch}
                    defaultChecked
                    name="type"
                    onChange={e => {
                      if (e.target.checked) {
                        values.type = 'EXPENSE';
                        e.target.value = 'EXPENSE';
                        setType('EXPENSE');
                      } else if (!e.target.checked) {
                        values.type = 'INCOME';
                        e.target.value = 'INCOME';
                        setType('INCOME');
                      }
                    }}
                  ></Field>
                  <Typography
                    className={style.typeItem}
                    sx={{ color: type === 'EXPENSE' ? '#ff6596' : '#000000' }}
                  >
                    Expense
                  </Typography>
                </div>
                <ErrorMessage name="type" />
                {type === 'EXPENSE' && (
                  <Field
                    component={UnstyledSelectSimple}
                    name="categoryId"
                    onChange={handleSetCatedory}
                  ></Field>
                )}
                <div className={style.amountDateBlock}>
                  {' '}
                  <label className={style.amountBlock}>
                    <Field
                      type="number"
                      name="amount"
                      className={style.amountInput}
                      placeholder="0.00"
                    ></Field>
                    {errors.amount && touched.amount && (
                      <span name="amount" className={style.errorMessage}>
                        {errors.amount}
                      </span>
                    )}
                  </label>
                  <Field
                    className={style.dateInput}
                    component={DatetimeAddTransaction}
                    onChange={e => {
                      values.transactionDate = e.toISOString().substring(0, 10);
                    }}
                  ></Field>
                </div>

                <Media
                  query="(max-width: 766px)"
                  render={() => (
                    <Field
                      component={TextareaAutosize}
                      minRows={3}
                      onChange={e => {
                        values.comment = e.target.value;
                      }}
                      name="comment"
                      className={style.commentInput}
                      placeholder="Comment"
                    />
                  )}
                />

                <Media
                  query="(min-width: 767px)"
                  render={() => (
                    <Field
                      component={TextareaAutosize}
                      onChange={e => {
                        values.comment = e.target.value;
                      }}
                      name="comment"
                      className={style.commentInput}
                      placeholder="Comment"
                    />
                  )}
                />
                <button
                  type="submit"
                  className={classNames(style.btn, style.btnAgree)}
                >
                  ADD
                </button>
                <button
                  type="button"
                  className={classNames(style.btn, style.btnDisagree)}
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
