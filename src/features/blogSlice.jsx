import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  error: [],
  loading: [],
  comment: [],
  category:[],
  detail: {},
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
    getLikeSucces: (state) => {
      state.loading = false;
    },
    getCategorySuccess: (state, { payload }) => {
      state.category = payload;
      state.loading = false;
    },
   
    getDetailSucces: (state, { payload }) => {
      state.detail = payload;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getBlogSuccess,
  getLikeSucces,
  getCommentSucces,
  getDetailSucces,
  fetchFail,
  getCategorySuccess
} = blogSlice.actions;

export default blogSlice.reducer;
