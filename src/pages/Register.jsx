import React from "react";

const Register = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center bg-[#175c51d8]">
      <div className="flex flex-col justify-center w-[70%] sm:w-[40%] rounded-2xl px-5 shadow-lg me-[5vh] bg-[#c0dbd4]">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h2 className="mt-10 text-center text-2xl font-bold leading-3 tracking-tight text-text-[#00323B]">
            SIGN UP
          </h2>
        </div>

        <div className="relative bottom-2 mt-5 sm:mx-auto sm:w-full sm:max-w-lg">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Firstname
              </label>
              <div className="mt-1">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Lastname
              </label>
              <div className="mt-1">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bio
              </label>
              <div className="mt-1">
                <input
                  id="bio"
                  name="bio"
                  type="text"
                  autoComplete="bio"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  name="image"
                  type="url"
                  autoComplete="image"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
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
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#C8FEF2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#00323bef] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#C8FEF2] hover:text-[#00323B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FEF2]"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-md text-gray-500">
            Already have an account ?
            <a
              href="#"
              className="font-semibold leading-6 mx-1  hover:text-[#00323B]"
            >
              SIGN IN
            </a>
          </p>
        </div>
      </div>

      <div className="custom-shape-divider-top-1705786918">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Register;
