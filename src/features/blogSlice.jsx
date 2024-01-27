import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news:[],
  blogs: [],
  error: [],
  loading: [],
  comment: [],
  category:[],
  userBlog:[],
  allBlogs:[],
  totalBlogs:[],
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
    getNewsSuccess:(state, actions) => {
      state.news = actions.payload
      state.loading = false;
    },
    getBlogSuccess: (state, actions) => {
      state.blogs = actions.payload.apiData;
      state.totalBlogs = actions.payload.totalRecords
      state.loading = false;
    },
    getAllBlogSuccess:(state, actions) => {
      state.allBlogs = actions.payload
      state.loading = false;
    },
    getfilterSuccess:(state, actions) => {
      state.blogs = actions.payload.apiData;
      state.totalBlogs = actions.payload.totalRecords
      state.loading = false;
    },
    getSearchSuccess:(state, actions) => {
      state.blogs = actions.payload.apiData;
      state.totalBlogs = actions.payload.totalRecords
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
    getUserBlogSuccess: (state, { payload }) => {
      state.userBlog = payload;
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
  getCategorySuccess,
  getUserBlogSuccess,
  getfilterSuccess,
  getSearchSuccess,
  getNewsSuccess,
  getAllBlogSuccess
} = blogSlice.actions;

export default blogSlice.reducer;
