import React, { useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { LuUser2 } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://task1-backend-chi.vercel.app/login",
        {
          userId,
          password,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex lg:h-auto h-screen mx-auto justify-center shadow-2xl overflow-x-hidden lg:mb-10">
      <div className="hidden lg:block text-center lg:w-[60%] w-full lg:p-20 bg-gradient-to-r from-red-500 to-purple-500 ">
        <h1 className="text-7xl text-white font-semibold mt-40 text-left">
          Welcome to Website
        </h1>
        <p className="text-white text-lg text-left mb-60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex odit
          pariatur ad similique animi recusandae dicta accusamus doloribus quas
          quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Debitis tempore tempora esse facere voluptate? Fuga quibusdam ex modi
          iste soluta?
        </p>
      </div>
      <div className="text-center bg-white lg:w-[40%] w-full flex flex-col justify-center">
        <h2 className="text-purple-500 text-2xl font-semibold uppercase">
          User Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="flex items-center justify-center m-2">
            <span className="">
              <LuUser2 />
            </span>
            <input
              type="email"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="bg-purple-200  rounded-3xl xl:w-[50%]  my-5 h-10 pl-2 w-full"
            />
          </div>
          <div className="flex items-center justify-center m-2">
            <span className="">
              <MdLockOutline />
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-purple-200 rounded-3xl xl:w-[50%] h-10 pl-2 w-full"
            />
          </div>
          <div className="flex  justify-between xl:w-[50%]  mx-2 xl:mx-auto py-5">
            <div className="flex items-center cursor-pointer">
              <TiTick className="text-white bg-purple-500 rounded-full text-lg mr-2" />
              remember
            </div>
            <div className="cursor-pointer">forgot ?</div>
          </div>
          <button
            type="submit"
            className="my-2 bg-purple-200 px-20 py-2 rounded-3xl text-white bg-gradient-to-r from-red-500 to-purple-500 uppercase font-medium"
          >
            Login
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
