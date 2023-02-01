export const selectAllTransactions = state => [...state.finance.data].reverse();

export const selectAllCategories = state => state.finance.categories;

export const selectLoading = state => state.finance.isLoading;
