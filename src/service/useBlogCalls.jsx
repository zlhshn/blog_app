import {
  fetchStart,
  fetchFail,
  getBlogSuccess,
  getLikeSucces,
  getDetailSucces,
} from "../features/blogSlice";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();

  const getBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}/`);
      const apiData = data.data;
      dispatch(getBlogSuccess(apiData));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postLike = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${id}/postLike`);
      dispatch(getLikeSucces());
      getBlog("blogs");
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

  return { getBlog, postLike, getDetail, postComment };
};

export default useBlogCalls;
