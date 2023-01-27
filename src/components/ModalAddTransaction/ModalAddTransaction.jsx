import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/finance/transactionOperation';
import { createPortal } from 'react-dom';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Formik, Form, Field, useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';

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
  // const [dataTransaction, setDataTransaction] = useState(null);
  // const [type, setType] = useState('EXPENSE');
  // const [date, setDate] = useState('');
  // const [category, setCategory] = useState('');
  // const [comment, setComment] = useState('');
  // const [amount, setAmount] = useState('');
  // const saveDataTransaction = e => {
  //   switch (e.currentTarget.name) {
  //     case 'date':
  //       setDate(e.currentTarget.value);
  //       break;
  //     case 'type':
  //       setType(e.currentTarget.value);
  //       break;
  //     case 'category':
  //       setCategory(e.currentTarget.value);
  //       break;
  //     case 'comment':
  //       setComment(e.currentTarget.value);
  //       break;
  //     case 'amount':
  //       setAmount(Number(e.currentTarget.value));
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmitAddTransaction = (value, actions) => {
    const dataForRequest = { ...value };

    if (dataForRequest.type === 'EXPENSE') {
      dataForRequest.amount = -dataForRequest.amount;
    }
    if (dataForRequest.type === 'INCOME') {
      dataForRequest.categoryId = categories.find(
        category => category.type === 'INCOME'
      ).id;
    }

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
    <div className="overlay" onClick={overlayClick}>
      <div className="Modal">
        {' '}
        <Formik
          initialValues={{
            type: 'EXPENSE',
            categoryId: categories[0].id,
            amount: '',
            transactionDate: new Date().toISOString().substring(0, 10),
            comment: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitAddTransaction}
        >
          {({ values }) => {
            return (
              <Form>
                Add transaction
                <div role="group" aria-labelledby="my-radio-group">
                  {' '}
                  <label>
                    {' '}
                    Income <Field
                      name="type"
                      type="radio"
                      value="INCOME"
                    />{' '}
                  </label>
                  <label>
                    <Field name="type" type="radio" value="EXPENSE" /> Expense
                  </label>
                </div>
                <ErrorMessage name="type" />
                {values.type === 'EXPENSE' && (
                  <Field name="categoryId" as="select">
                    <option value="" disabled>
                      {' '}
                      Not selected
                    </option>
                    {expenseCategories.length !== 0 &&
                      expenseCategories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}{' '}
                        </option>
                      ))}
                  </Field>
                )}
                <Datetime
                  inputProps={{
                    name: 'transactionDate',
                  }}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  initialValue={new Date()}
                  onChange={({ _d }) => {
                    values.transactionDate = _d.toISOString().substring(0, 10);
                  }}
                />
                <ErrorMessage name="transactionDate" />
                <Field type="number" name="amount" />
                <ErrorMessage name="amount" />
                <Field type="text" name="comment" />
                <ErrorMessage name="comment" />
                <button type="submit">ADD</button>
                <button
                  type="button"
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
