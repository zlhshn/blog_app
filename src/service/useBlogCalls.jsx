import { fetchStart, fetchFail, getBlogSuccess } from "../features/blogSlice";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();

  const getBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}/`);
      const apiData =data.data
      dispatch(getBlogSuccess(apiData));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {getBlog}
};

export default useBlogCalls;
