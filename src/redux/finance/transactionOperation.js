import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { instanceRegister } from 'redux/auth/authOperation';

export const getAllTransaction = createAsyncThunk(
  'finance/fetchAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'GET',
        url: 'api/transactions',
      });
      if (data.length === 0) {
        return thunkAPI.rejectWithValue();
      }
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
      return thunkAPI.rejectWithValue(
        Notify.failure(
          'Incorrect data! Please check your details and try again.',
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
export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (item, thunkAPI) => {
    try {
      await instanceRegister({
        method: 'DELETE',
        url: `api/transactions/${item.id}`,
      });

      return item;
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
export const getTransactionSummary = createAsyncThunk(
  'finance/getTransactionSummary',
  async (queryPeriod, thunkAPI) => {
    try {
      const { data } = await instanceRegister({
        method: 'GET',
        url: '/api/transactions-summary',
        params: queryPeriod,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
