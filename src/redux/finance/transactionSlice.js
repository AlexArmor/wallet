import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getAllTransaction,
  getTransactionCategories,
  getTransactionSummary,
} from './transactionOperation';

const initialState = {
  totalBalance: '',
  data: [],
  categories: [],
  dataPeriod: {},
  isLoading: false,
};
const transactionSlice = createSlice({
  name: 'finance',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAllTransaction.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    [addTransaction.fulfilled](state, action) {
      state.data.push(action.payload);
      state.totalBalance = action.payload.balanceAfter;
    },
    [deleteTransaction.fulfilled](state, action) {
      const index = state.data.findIndex(
        transaction => transaction.id === action.payload.id
      );
      state.data.splice(index, 1);
    },
    [getTransactionCategories.fulfilled](state, action) {
      state.categories = action.payload;
    },
    [getAllTransaction.pending](state) {
      state.isLoading = true;
    },
    [getAllTransaction.rejected](state) {
      state.isLoading = false;
    },
    [getTransactionSummary.fulfilled](state, action) {
      state.dataPeriod = action.payload;
    },
  },
});
export const transactionReducer = transactionSlice.reducer;
