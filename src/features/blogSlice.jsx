import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  error: [],
  loading: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    getBlogSuccess: (state, { payload }) => {
      state.blogs = payload;
      state.loading = false;
    },
    getLikeSucces:(state)=>{
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getBlogSuccess,getLikeSucces, fetchFail } = blogSlice.actions;

export default blogSlice.reducer;
