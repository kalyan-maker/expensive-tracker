import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

//Actions for redirect
export const resetIncCreated = createAction("income/created/reset");
export const resetIncUpdate = createAction("income/update/reset");

//Create action
export const createIncomeAction = createAsyncThunk(
  "income/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //make http call here
      const { data } = await axios.post("api/income", payload, config);
      dispatch(resetIncCreated());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all expenses
export const fetchAllIncomeAction = createAsyncThunk(
  "income/fetch-all",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users?.userAuth;
    const config = {
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    };
    try {
      const { data } = await axios.get(`api/income?page=${payload}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Create action
export const updateIncomeAction = createAsyncThunk(
  "income/update",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //make http call here
      const { data } = await axios.put(
        `api/income/${payload?.id}`,
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//slices

const incomeSlices = createSlice({
  name: "income",
  initialState: {},
  extraReducers: (builder) => {
    //   Create Expense
    builder.addCase(createIncomeAction.pending, (state, action) => {
      state.loading = true;
    });
    //reset action
    builder.addCase(resetIncCreated, (state, action) => {
      state.isIncCreated = true;
    });
    builder.addCase(createIncomeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.incomeCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isIncCreated = false;
    });
    builder.addCase(createIncomeAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });

    //   fetch all Expense
    builder.addCase(fetchAllIncomeAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllIncomeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.incomeList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllIncomeAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });

    //   update Expense
    builder.addCase(updateIncomeAction.pending, (state, action) => {
      state.loading = true;
    });
    //reset action
    builder.addCase(resetIncUpdate, (state, action) => {
      state.isIncUpdated = true;
    });
    builder.addCase(updateIncomeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.incomeUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isIncUpdated = false;
    });
    builder.addCase(updateIncomeAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });
  },
});

export default incomeSlices.reducer;
