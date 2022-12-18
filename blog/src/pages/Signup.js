import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import { toast, Toast } from "react-toastify";

import Base from "../components/Base";

function Signup() {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
  });

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);
  //handle change

  //dynamic setting the data
  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  //Resetting the form
  const resetData = () => {
    setData({
      name: "",
      password: "",
      email: "",
    });
  };

  //Submit the form

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data);
    toast.success("Form Submitted");
    resetData();
    //data validate

    // call server api for sending the data
  };

  return (
    <div>
      <Base>
        {JSON.stringify(data)}
        <div className="w-full max-w-xs mx-auto mt-40">
          <form
            className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
            onSubmit={submitForm}
          >
            <div className="mb-4">
              <h1 class="font-bold text-2xl mb-4">Registration Form</h1>
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
                onChange={(e) => handleChange(e, "name")}
                value={data.name}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => handleChange(e, "email")}
                value={data.email}
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
                onChange={(e) => handleChange(e, "password")}
                value={data.password}
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitForm}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-white mr-20 py-2 px-4 rounded bg-blue-500 hover:text-blue-800"
                href="#"
                onClick={resetData}
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

export default Signup;
