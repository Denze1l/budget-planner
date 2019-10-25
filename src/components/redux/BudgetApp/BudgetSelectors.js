export const getBudget = state => state.Budget;
export const getExpensesArr = state => state.expenses;

export const getExpenses = state =>
  state.expenses.reduce((total, expense) => total + expense.amount, 0);

export const getBalance = state => getBudget(state) - getExpenses(state);
