import React from "react";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [loginDetail, setloginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, field) => {
    let actualValue = e.target.value;
    setloginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setloginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetail);

    //validation

    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("Username or Password is required !!");
      return;
    } else {
      toast.success("Login Successfully");
    }
  };

  return (
    <div>
      <Base>
        <div
          className="w-full max-w-xs mx-auto mt-40"
          onSubmit={handleFormSubmit}
        >
          <form className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
            <h1 class="font-bold text-2xl mb-4">Login Form</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={loginDetail.username}
                onChange={(e) => handleChange(e, "username")}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={loginDetail.password}
                onChange={(e) => handleChange(e, "password")}
              />
              {/* <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleFormSubmit}
              >
                Log In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-white mr-20 py-2 px-4 rounded bg-blue-500 hover:text-blue-800"
                href="#"
                onClick={handleReset}
              >
                Reset
              </a>
            </div>
          </form>
        </div>
      </Base>
    </div>
  );
}

export default Login;
