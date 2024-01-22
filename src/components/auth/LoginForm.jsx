import React from "react";
import { Form } from "formik";
import { object, string } from "yup";

export const loginSchema = object({
    email: string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must contain at least 8 characters")
      .max(20, "Password must contain no more than 20 characters")
      .matches(/\d+/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[@.$!%*?&]+/,
        "Password must contain at least one special character (@.$!%*?&)"
      ),
  });


const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Form className="space-y-6">
      <div>
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            {touched.email && errors.email && (
              <span className=" text-red-500 text-sm  mb-2">
                *{errors.email}
              </span>
            )}
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
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 "
            />
            {touched.password && errors.password && (
              <span className=" text-red-500 text-sm pt-1 ">
                *{errors.password}
              </span>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary mt-3"
          >
            Sign in
          </button>
        </div>
      </div>
    </Form>
  );
};


export default LoginForm