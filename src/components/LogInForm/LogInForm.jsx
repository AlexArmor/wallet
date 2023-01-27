import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';
import { NavLink } from 'react-router-dom';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(userData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        E-mail
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
      <NavLink to="/register">Register</NavLink>
    </form>
  );
};
