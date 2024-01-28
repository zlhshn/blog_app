import {
  fetchStart,
  fetchFail,
  getBlogSuccess,
  getLikeSucces,
  getDetailSucces,
  getCategorySuccess,
  getUserBlogSuccess,
  getfilterSuccess,
  getSearchSuccess,
  getNewsSuccess,
  getAllBlogSuccess
} from "../features/blogSlice";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken, axiosNews } = useAxios();

const getAllBlogs=async(url)=>{
  dispatch(fetchStart());
  try {
    const { data } = await axiosPublic(`/${url}`);
    const apiData = data.data
    dispatch(getAllBlogSuccess(apiData));
  } catch (error) {
    dispatch(fetchFail());
    console.log(error);
  }

}


  const getNews = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosNews.get(`${url}`);
      const apiData = data.results
      dispatch(getNewsSuccess(apiData));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}`);
      const apiData = data.data;
      const totalRecords = data.details.totalRecords;
      dispatch(getBlogSuccess({ apiData, totalRecords }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const filterBlog = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}/?filter[categoryId]=${id}`);
      const apiData = data.data;
      const totalRecords = data.details.totalRecords;
      dispatch(getfilterSuccess({ apiData, totalRecords }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const searchBlog = async (url, value) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}/?search[content]=${value}`);
      const apiData = data.data;
      const totalRecords = data.details.totalRecords;
      dispatch(getSearchSuccess({ apiData, totalRecords }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postLike = async (url, id, page) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/${id}/postLike`);
      dispatch(getLikeSucces());
      getBlog(page);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getDetail = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/${id}`);
      dispatch(getDetailSucces(data.data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postComment = async (url, commentInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, commentInfo);
      getDetail("blogs", commentInfo.blogId);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postBlog = async (url, blogInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, blogInfo);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const putBlog = async (url, id, blogInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${id}`, blogInfo);
      getDetail(url, id);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteBlog = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}`);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      dispatch(getCategorySuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getUserBlog = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}?author=${id}&limit=10000`);
      dispatch(getUserBlogSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return {
    getBlog,
    postLike,
    getDetail,
    postComment,
    postBlog,
    getCategories,
    getUserBlog,
    putBlog,
    deleteBlog,
    filterBlog,
    searchBlog,
    getNews,
    getAllBlogs
  };
};

export default useBlogCalls;
