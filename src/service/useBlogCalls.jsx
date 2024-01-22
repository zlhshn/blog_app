import { fetchStart, fetchFail, getBlogSuccess, getLikeSucces } from "../features/blogSlice";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic ,axiosWithToken} = useAxios();

  const getBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}/`);
      const apiData =data.data
      dispatch(getBlogSuccess(apiData));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };


  const likeOrUnlike =async (id)=>{
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${id}/postLike`)
      dispatch(getLikeSucces())
      getBlog("blogs")
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }

  return {getBlog ,likeOrUnlike}
};

export default useBlogCalls;
