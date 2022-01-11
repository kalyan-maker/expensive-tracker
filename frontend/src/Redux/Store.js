import { configureStore } from "@reduxjs/toolkit";
import account from "./account";
import expensesReducer from "./expenses";
import usersReducer from "./user";
import incomeReducer from "./income";

const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expensesReducer,
    income: incomeReducer,
    account,
  },
});

export default store;
