import React, { useState } from "react";
import { IMAGES } from "../../utils/Images";
import Inputfield from "../../Components/Inputfield";
import Button from "../../Components/Button";
import AuthRightSide from "./Components/AuthRightSide";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1">
      <div className="md:w-[70%] w-[90%] mx-auto py-5  2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center  overflow-auto  custom-scrollbar h-screen">
        <img
          src={IMAGES.SIGNINIMG}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />
       <div className="w-full">
          <div className="flex gap-4 items-center text2   md:mt-0 mt-4">
            <p className="text-start text-white"> Welcome Back</p>
            <p>👋</p>
          </div>

          <p className="text8 font-medium text-white">  Today is a new day. It's your day. You shape it.
            Sign in to get started. </p>

          <div className="">
            <Inputfield
              divstyle="md:mt-7 mt-2"
              Labelname="Email Address"
              labelstyle="text-white text11"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="email"
              placeholder="Enter your Email"
              name="email"
            />

            <Inputfield
              divstyle="md:mt-7 mt-2"
              Labelname="Password"
              labelstyle="text-white text11"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="password"
              placeholder="Your password"
              name="password"
            />

            <Inputfield
              divstyle="md:mt-7 mt-2"
              Labelname="Email Address"
              labelstyle="text-white text11"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="email"
              placeholder="Enter your Email"
              name="email"
            />

            <Inputfield
              divstyle="md:mt-7 mt-2"
              Labelname="Password"
              labelstyle="text-white text11"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="password"
              placeholder="Your password"
              name="password"
            />

            <Inputfield
              divstyle="md:mt-7 mt-2"
              Labelname="Email Address"
              labelstyle="text-white text11"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="email"
              placeholder="Enter your Email"
              name="email"
            />

            <Inputfield
              divstyle="md:mt-7 mt-2"
              Labelname="Password"
              labelstyle="text-white text11"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="password"
              placeholder="Your password"
              name="password"
            />

          </div>


          <Button
            onPress={() => navigate("/login")}
            divstyle="w-full md:my-10 my-2  text-white bg-goldColor font-medium lg:py-3 py-2 text8"
            btnname="Sign Up"
            type="submit"
          />
        </div>


        <p className="text-white text9 text-center my-2">Don't you have an account?<span onClick={() => navigate('/login')} className="text-primaryColor underline cursor-pointer px-1">Sign In</span></p>
      </div>


      <AuthRightSide />

    </div>

  );
};

export default Register;



