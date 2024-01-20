import React from "react";
import loginImg from "../assets/image/deer1.png"

export default function Login() {
  return (
    <>
      <div className=" bg-primary"> 
     
    <div className="flex  h-[100vh] flex-row justify-center items-center ">
      <div className=" ">
        <img src={loginImg} alt=""  className="h-[100vh] w-[100%]"/>
      </div>
       <div className= "flex flex-col justify-center w-[70%] sm:w-[40%] h-[50%]  bg-secondary rounded-2xl px-5 shadow-lg me-[5vh]">
          <div className="sm:mx-auto sm:w-full sm:max-w-lg">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-text-main">
              SIGN IN
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-md text-gray-500">
              Not a member?
              <a
                href="#"
                className="font-semibold leading-6 mx-1  hover:text-main"
              >
                SIGN UP
              </a>
            </p>
          </div>
        </div>
    </div>
   
       
       
      </div>
    </>
  );
}
