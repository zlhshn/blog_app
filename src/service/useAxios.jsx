import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });

  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  const axiosNews=axios.create({

    baseURL: `${process.env.REACT_APP_NEWS_URL}`,
  })

  return { axiosPublic, axiosWithToken,axiosNews };
};

export default useAxios;
