import React, { useState } from "react";
import Welcome from "../../Common/Welcome/Welcome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [logDets, setLogDets] = useState({
    email: "",
    password: "",
  });

  const selector = useSelector(state => state.Reducer.data);
  let localDatabase = JSON.parse(localStorage.getItem("userDatabase"));
  const localDatabaseValidate = localDatabase.find(
    user => user.email === logDets.email
  );
  const foundUser = selector.find(user => user.email === logDets.email);

  const handelValidation = e => {
    e.preventDefault();

    if (logDets.email === "" || logDets.password === "") {
      displayToast("Please Enter Email and Password to Log In", "error");
    } else if (!foundUser && !localDatabaseValidate) {
      displayToast("User Does Not Exist, Please Sign Up", "error");
    } else if (foundUser && foundUser.password !== logDets.password) {
      displayToast("Password Is Wrong", "error");
    } else if (
      localDatabaseValidate &&
      localDatabaseValidate.password !== logDets.password
    ) {
      displayToast("Password Is Wrong", "error");
    } else {
      displayToast("Account Login Successfully", "success");
      navigate("/");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          email: logDets.email,
          password: logDets.password,
        })
      );
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

  const handelLogin = e => {
    const { name, value } = e.target;
    setLogDets(prevState => ({
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
            Log In To Your Account
          </h2>
          <form className="space-y-6">
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
                  value={logDets.email}
                  onChange={handelLogin}
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-main text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-zinc-500"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link className="font-semibold green-grade">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={logDets.password}
                  onChange={handelLogin}
                  autoComplete="current-password"
                  placeholder="Enter Your Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-main text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4 leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handelValidation}
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 tracking-widest"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to="/Sign-Up" className="font-semibold leading-6 green-grade">
              Sign Up
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

export default Login;
