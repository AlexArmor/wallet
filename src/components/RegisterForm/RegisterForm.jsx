import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import sprite from '../../icons/sprite.svg';
import css from './RegisterForm.module.css';
import classNames from 'classnames';

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  userName: '',
};

let schema = yup.object().shape({
  email: yup.string().email('Email entered incorrectly').required(),
  password: yup
    .string()
    .min(6, 'Your password is too short!')
    .max(12, 'Your password is too long!')
    .required(),
  passwordConfirm: yup
    .string()
    .min(6, 'Your password is too short!')
    .max(12, 'Your password is too long!')
    .required(),
  userName: yup
    .string()
    .min(1, 'Name must be more than 1 character')
    .max(12, 'Name must be less than 12 characters')
    .required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newUser = {
      username: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(newUser));
    form.reset();
  };

  return (
    <>
      <div className={css.registerForm}>
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
            <label className={css.label}>
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
            <label className={css.label}>
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
            <label className={css.label}>
              <Field
                className={classNames(css.input, css.inputLock)}
                type="password"
                name="passwordConfirm"
                placeholder="Confirm password"
              />
              <ErrorMessage
                name="passwordConfirm"
                component="div"
                className={css.errorMessage}
              />
            </label>
            <label className={css.label}>
              <Field
                className={classNames(css.input, css.inputName)}
                type="text"
                name="userName"
                placeholder="First name"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className={css.errorMessage}
              />
            </label>
            <button
              className={classNames(css.btn, css.btnRegister)}
              type="submit"
            >
              Register
            </button>
          </Form>
        </Formik>
        <NavLink className={classNames(css.btn, css.btnLogIn)} to="/login">
          Log in
        </NavLink>
      </div>
    </>
  );
};
