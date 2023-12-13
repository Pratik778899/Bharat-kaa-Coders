import React, { useState } from "react";
import Welcome from "../../Common/Welcome/Welcome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Store/Action/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.Reducer.data);
  // console.log(selector);
  const [SignupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
  });

  const isUserExists =
    selector && selector.some(user => user.email === SignupDetails.email);

  const handelValidation = e => {
    e.preventDefault();
    if (SignupDetails.email === "" || SignupDetails.password === "") {
      displayToast("Please Enter Email and Password to Sign Up", "error");
    } else if (isUserExists) {
      displayToast("User Already Exists, Please Use Another Email", "error");
    } else {
      dispatch(signup(SignupDetails));
      displayToast("Account Successfully Created", "success");
    }
  };

  const displayToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSignup = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignupDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <ToastContainer />
      <div className="flex bg-main min-h-full flex-1 justify-center px-6 py-12 lg:px-8 text-white items-center flex-col-reverse md:flex-row">
        <div className="glow-round"></div>

        <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm md:mt-20">
          <h2 className="mt-2 m-8 text-center text-2xl font-semibold leading-9 -tracking-tight text-zinc-100">
            Sign Up for an Account
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-zinc-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={SignupDetails.email}
                  onChange={handleSignup}
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-main text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-zinc-500"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={SignupDetails.password}
                  onChange={handleSignup}
                  autoComplete="new-password"
                  placeholder="Enter Your Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-main text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handelValidation}
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 tracking-widest"
              >
                Sign Up
              </button>
            </div>
          </div>

          <p className="mt-2 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/Log-In" className="font-semibold leading-6 green-grade">
              Log In
            </Link>
          </p>
        </div>
        <div className="w-5/6 sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
          <div className="sm:w-420 flex-center items-center flex relative">
            <Welcome />
          </div>
        </div>
        <div className="glow-round-right"></div>
      </div>
    </>
  );
};

export default Signup;
