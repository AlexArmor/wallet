import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, register, login } from './authOperation';

const initialState = {
  user: {
    username: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const authReducer = authSlice.reducer;
