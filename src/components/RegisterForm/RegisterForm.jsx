import { useDispatch } from 'react-redux';
import { useState } from 'react';
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
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required(),
  userName: yup
    .string()
    .min(1, 'Name must be more than 1 character')
    .max(12, 'Name must be less than 12 characters')
    .required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [style, setStyle] = useState({ width: '0%' });
  let passwordValue = '';
  let passwordConfirmValue = '';

  const handleChange = e => {
    if (e.target.name === 'password') {
      passwordValue = e.target.value;
    } else if (e.target.name === 'passwordConfirm') {
      passwordConfirmValue = e.target.value;
    }
    console.log(style);
    if (
      passwordConfirmValue === passwordValue &&
      passwordConfirmValue.length >= 6 &&
      passwordConfirmValue.length <= 12
    ) {
      console.log(style);
      setStyle({ width: '100%' });
    } else if (passwordValue.length >= 6 && passwordValue.length <= 12) {
      console.log(style);
      setStyle({ width: '50%' });
    } else {
      setStyle({ width: '0%' });
    }
  };

  const handleSubmit = (values, actions) => {
    const { email, password, userName } = values;

    const newUser = {
      username: userName,
      email,
      password,
    };
    dispatch(register(newUser));
    actions.resetForm();
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
                onKeyUp={handleChange}
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
            <label className={classNames(css.label, css.labelLock)}>
              <Field
                onKeyUp={handleChange}
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
            <div className={css.spanWrap}>
              <span className={css.span} style={style}></span>
            </div>
            <label className={classNames(css.label, css.labelName)}>
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
