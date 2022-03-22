import React, { useState } from "react";
import logo from "./Images/logo1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/adminuser", formdata);
      alert(res.data.message);
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Error", error.response.data);
      }
    }
  };
  return (
    <div className="adminlogin">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500 px-6">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-50 max-w-md">
          <img
            className="h-14 mb-4 mx-auto bg-slate-500 rounded-md"
            src={logo}
            alt=""
          />
          <div className="h3 mt-4 font-medium self-center text-md text-2xl  text-2xl text-gray-800">
            Admin Login
          </div>
          <div className="mt-4">
            <form>
              <div className="flex flex-col mb-5 ">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"></div>
                  <input
                    value={formdata.name}
                    onChange={handleInputs}
                    id="email"
                    type="email"
                    name="email"
                    className=" text-sm placeholder-gray-500 pl-2 pr-2 rounded-xl border border-gray-400 w-full lg:w-64 md:w-64 py-2.5 focus:outline-none focus:border-blue-400"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    {" "}
                  </div>
                  <input
                    value={formdata.name}
                    onChange={handleInputs}
                    id="password"
                    type="password"
                    name="password"
                    className="text-sm placeholder-gray-500 pl-2 pr-2 rounded-xl border border-gray-400 w-full lg:w-64 md:w-64 py-2.5 focus:outline-none focus:border-blue-400"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  onClick={sendData}
                  className=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-xl py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase my-1">Log In</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
