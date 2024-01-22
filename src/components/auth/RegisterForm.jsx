import React from "react";
import { Form } from "formik";
import { object, string } from "yup";

export const registerSchema = object({
  username: string().required("Username is required"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  bio: string(),
  image: string().required("Image url required"),
  city: string().required("City is required"),
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

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form className="space-y-2">
      <div>
        <label
          htmlFor="username"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="username"
            placeholder="username"
            autoComplete="false"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Username
          </span>
        </label>
        {touched.username && errors.username && (
          <span className=" text-red-500 text-sm  mb-2">
            *{errors.username}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="firstName"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="firstName"
            placeholder="firstName"
            autoComplete="false"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            First Name
          </span>
        </label>
        {touched.firstName && errors.firstName && (
          <span className=" text-red-500 text-sm  mb-2">
            *{errors.firstName}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="lastName"
            placeholder="lastName"
            autoComplete="false"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Last Name
          </span>
        </label>
        {touched.lastName && errors.lastName && (
          <span className=" text-red-500 text-sm  mb-2">
            *{errors.lastName}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="email"
            id="email"
            placeholder="email"
            autoComplete="false"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Email
          </span>
        </label>
        {touched.email && errors.email && (
          <span className=" text-red-500 text-sm  mb-2">*{errors.email}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="image"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="url"
            id="image"
            placeholder="image"
            autoComplete="false"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Image
          </span>
        </label>
        {touched.image && errors.image && (
          <span className=" text-red-500 text-sm  mb-2">*{errors.image}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="bio"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="bio"
            placeholder="bio"
            autoComplete="false"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Bio
          </span>
        </label>
      </div>
      <div>
        <label
          htmlFor="city"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="city"
            placeholder="city"
            value={values.city}
            onChange={handleChange}
            autoComplete="false"
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            City
          </span>
        </label>
        {touched.city && errors.city && (
          <span className=" text-red-500 text-sm  mb-2">*{errors.city}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="peer h-6 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Password
          </span>
        </label>
        {touched.password && errors.password && (
          <span className=" text-red-500 text-sm pt-1 ">
            *{errors.password}
          </span>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#00323bef] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#C8FEF2] hover:text-[#00323B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FEF2]"
        >
          Sign up
        </button>
      </div>
    </Form>
  );
};

export default RegisterForm;
