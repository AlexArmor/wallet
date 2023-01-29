import { LogInForm } from 'components/LogInForm/LogInForm';
import css from './Login.module.css';

export default function Login() {
  return (
    <section className={css.login}>
      <div className={css.login__wrapper}>
        <div className={css.login__img}></div>
        <h1 className={css.login__title}>Finance App</h1>
      </div>
      <LogInForm />
    </section>
  );
}
