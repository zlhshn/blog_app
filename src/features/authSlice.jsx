import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  error: "",
  token: "",
  loading: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user.username;
      state.token = payload.token;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.username;
      state.token = payload.token;
    },
    logoutSucces: (state) => {
      state.user = "";
      state.loading = false;
      state.token = "";
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSucces,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;
