import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  error: "",
  image:"",
  token: "",
  loading: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error=false
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user.username;
      state.token = payload.token;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.data.username;
      state.image=payload.userInfo.image
      state.token = payload.token;
    },
    logoutSucces: (state) => {
      state.user = "";
      state.loading = false;
      state.token = "";
      state.image =""
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
