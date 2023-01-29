import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';
export default function Register() {
  return (
    <section className={css.register}>
      <div className={css.register__wrapper}>
        <div className={css.register__img}></div>
        <h1 className={css.register__title}>Finance App</h1>
      </div>
      <RegisterForm />
    </section>
  );
}
