import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { NavLink } from 'react-router-dom';

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
      <form onSubmit={handleSubmit} autoComplete="on">
        <label>
          E-mail
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <label>
          Confirm password
          <input type="password" name="passwordConfirm" />
        </label>
        <label>
          First name
          <input type="text" name="name" />
        </label>
        <button type="submit">Register</button>
        <NavLink to="/login">Log in</NavLink>
      </form>
    </>
  );
};
