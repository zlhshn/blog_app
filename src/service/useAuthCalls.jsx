import {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSucces,
  fetchFail,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { Navigate, useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { axiosPublic, axiosWithToken } = useAxios();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess({data,userInfo}));
      navigate("/")
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken("/auth/logout/");
      dispatch(logoutSucces());
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { login, register, logout };
};

export default useAuthCalls;
