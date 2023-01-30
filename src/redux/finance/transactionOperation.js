import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceRegister } from 'redux/auth/authOperation';

export const getAllTransaction = createAsyncThunk(
  'finance/fetchAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'GET',
        url: 'api/transactions',
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'POST',
        url: '/api/transactions',
        data: transaction,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'DELETE',
        url: `api/transactions/${transactionId}`,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getTransactionCategories = createAsyncThunk(
  'finance/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'GET',
        url: 'api/transaction-categories',
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
