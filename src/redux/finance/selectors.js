export const selectAllTransactions = state => state.finance.data;

export const selectAllCategories = state => state.finance.categories;

export const selectLoading = state => state.finance.isLoading;
