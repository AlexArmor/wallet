import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// axios.defaults.baseURL = 'https://wallet.goit.ua/';
export const instanceRegister = axios.create({
  baseURL: 'https://wallet.goit.ua/',
});

const token = {
  set(token) {
    instanceRegister.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceRegister.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'POST',
        url: 'api/auth/sign-up',
        data: userData,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.message === `Request failed with status code 409`) {
        return thunkAPI.rejectWithValue(
          Notify.failure('User with this email address already exists!', {
            width: '320px',
            fontSize: '16px',
            useFontAwesome: true,
            useIcon: false,
            failure: {
              background: '#ff6596',
            },
          })
        );
      }
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instanceRegister.post(
        '/api/auth/sign-in',
        userData
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notify.failure(
          'Wrong username or password! Please check your details and try again.',
          {
            width: '320px',
            fontSize: '16px',
            useFontAwesome: true,
            useIcon: false,
            failure: {
              background: '#ff6596',
            },
          }
        )
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instanceRegister.delete('/api/auth/sign-out');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await instanceRegister({
        method: 'GET',
        url: 'api/users/current',
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
