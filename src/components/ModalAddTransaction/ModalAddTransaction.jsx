import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/finance/transactionOperation';
import { createPortal } from 'react-dom';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './ModalAddTransaction.module.css';
import * as yup from 'yup';
import { MaterialUISwitch } from './SwitchModalComponent';
import { Typography, Select, MenuItem } from '@mui/material';
import { DatetimeAddTransaction } from './DatetimeAddTransaction';

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

  // const [amount, setAmount] = useState(0);

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

  return createPortal(
    <div className={style.overlay} onClick={overlayClick}>
      <div className={style.modal}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitAddTransaction}
        >
          {({ values }) => {
            return (
              <Form className={style.form}>
                <h1 className={style.title}> Add transaction</h1>
                <Typography>Income</Typography>

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

                <Typography>Expense</Typography>
                <ErrorMessage name="type" />

                {type === 'EXPENSE' && (
                  <Field
                    component={Select}
                    defaultValue=""
                    name="categoryId"
                    onChange={e => {
                      console.log(values.categoryId);
                      values.categoryId = e.target.value;
                    }}
                    className={style.selectInput}
                  >
                    <MenuItem
                      value={incomeCategory.id}
                      className={style.firstSelectItem}
                    >
                      Select a category
                    </MenuItem>
                    {expenseCategories.length !== 0 &&
                      expenseCategories.map(category => (
                        <MenuItem
                          key={category.id}
                          value={category.id}
                          className={style.selectItem}
                        >
                          {category.name}{' '}
                        </MenuItem>
                      ))}
                  </Field>
                )}
                <Field
                  type="number"
                  name="amount"
                  className={style.amountInput}
                  // onChange={e => {
                  //   console.log(e.target.value);
                  //   setAmount(e.target.value);
                  // }}
                  placeholder="0.00"
                />
                <ErrorMessage name="amount" />
                <Field
                  component={DatetimeAddTransaction}
                  onChange={e => {
                    values.transactionDate = e.toISOString().substring(0, 10);
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
