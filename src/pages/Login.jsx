import React from "react";
import loginImg from "../assets/image/deer1.png";
import useAuthCalls from "../service/useAuthCalls";

import {Formik } from "formik";
import LoginForm from "../components/auth/LoginForm";
import { loginSchema } from "../components/auth/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuthCalls();


  return (
    <>
      <div className=" bg-primary">
        <div className="flex  h-[100vh] flex-row justify-center items-center ">
          <div className=" ">
            <img src={loginImg} alt="" className="h-[100vh] w-[100%]" />
          </div>
          <div className="flex flex-col justify-center w-[70%] sm:w-[40%] h-[50%]  bg-secondary rounded-2xl px-5 shadow-lg me-[5vh]">
            <div className="sm:mx-auto sm:w-full sm:max-w-lg">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-text-main">
                SIGN IN
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
              <div>
                <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                  login(values);
                  actions.resetForm();
                  actions.setSubmitting(false);
                }}
                component={(props)=> <LoginForm {...props}/>}
              >
               
              </Formik>
              </div>
              
              <p className="mt-10 text-center text-md text-gray-500">
                Not a member?
                <Link
                  to={"/register"}
                  className="font-semibold leading-6 mx-1  hover:text-main"
                >
                  SIGN UP
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
