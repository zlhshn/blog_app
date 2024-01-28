import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../service/useAuthCalls";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <div className="relative sm:h-[100vh] py-12 flex justify-center items-center bg-[#175c51d8]">
      <div className="flex flex-col justify-center my-20  w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-2xl px-5  shadow-lg   bg-[#c0dbd4]">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h2 className="mt-10 text-center text-2xl font-bold leading-3 tracking-tight text-text-[#00323B]">
            SIGN UP
          </h2>
        </div>

        <div className="relative z-10 bottom-2 mt-3 sm:mx-auto sm:max-w-md">
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              image: "",
              city: "",
              bio: "",
              password:""
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <p className="mt-10 text-center text-md text-gray-500">
            Already have an account ?
            <NavLink
              to="/login"
              className="font-semibold leading-6 mx-1  hover:text-[#00323B]"
            >
              SIGN IN
            </NavLink>
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
