import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import sprite from '../../icons/sprite.svg';
import css from './LoginForm.module.css';
import classNames from 'classnames';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  email: '',
  password: '',
};
let schema = yup.object().shape({
  email: yup.string().email('Email entered incorrectly').required(),
  password: yup.string().required(),
});

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));

    actions.resetForm();
  };

  return (
    <>
      <div className={css.loginForm}>
        <div className={css.logo}>
          <svg className={css.logoIcon}>
            <use href={sprite + '#wallet'}></use>
          </svg>
          <h2 className={css.logoTitle}>Wallet</h2>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form autoComplete="on" className={css.form}>
            <label className={classNames(css.label, css.labelEmail)}>
              <Field
                className={classNames(css.input, css.inputEmail)}
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </label>
            <label className={classNames(css.label, css.labelLock)}>
              <Field
                className={classNames(css.input, css.inputLock)}
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.errorMessage}
              />
            </label>
            <button className={classNames(css.btn, css.btnLogIn)} type="submit">
              Log In
            </button>
          </Form>
        </Formik>
        <NavLink
          className={classNames(css.btn, css.btnRegister)}
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </>
  );
};
