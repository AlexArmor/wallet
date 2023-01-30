import { Route, Routes } from 'react-router-dom';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';

import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Dashboard from 'pages/Dashboard/Dashboard';
import Statistics from 'pages/Statistics/Statistics';
import Home from 'pages/Home/Home';
import Currency from 'pages/Currency/Currency';

import { getCurrentUser } from 'redux/auth/authOperation';
import { useEffect } from 'react';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { RestrictedRoute } from 'HOCs/RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login" component={<Dashboard />} />
          }
        >
          <Route index element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route
            path="currency"
            element={
              <Media query="(max-width: 767px)" render={() => <Currency />} />
            }
          />
        </Route>
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
};
