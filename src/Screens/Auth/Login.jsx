import React, { useState } from "react";
import { IMAGES } from "../../utils/Images";
import Inputfield from "../../Components/Inputfield";
import Button from "../../Components/Button";
import Divider from "../../Components/Divider";
import AuthRightSide from "./Components/AuthRightSide";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    return (
        <div className="w-full grid md:grid-cols-2 grid-rows-1">
            <div className="md:w-[70%] w-[90%]  2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center overflow-auto custom-scrollbar mx-auto h-screen py-5">
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

                
                    <Inputfield
                        divstyle="md:mt-7 mt-2"
                        Labelname="Email Address"
                        labelstyle="text-white text8"
                        innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
                        inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                    />

                    <Inputfield
                        divstyle="md:mt-7 mt-2"
                        Labelname="Password"
                        labelstyle="text-white text8"
                        innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
                        inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
                        type="password"
                        placeholder="Your password"
                        name="password"
                    />

                </div>

                <p onClick={() => navigate('/forgotPassword')} className="text-right text-textRedColor md:my-5 my-2 cursor-pointer text8">
                    Forgot Password?
                </p>

                <Button
                    divstyle="w-full md:mb-[10px] mb-0  text-white bg-goldColor font-medium lg:py-3 py-2 text8"
                    btnname="Sign in"
                    type="submit"
                />

                <Divider dividerwithtext text="Social Accounts" borderStyle="border-borderColor" textStyle="text-borderColor" />

                <Button
                    divstyle="w-full mt-[20px] text-socialColor bg-white font-medium lg:py-3 py-2 text8"
                    btnname="Sign in with Google"
                    image={IMAGES.GOOGLE}
                    imagediv="flex justify-center items-center gap-8"
                    imageStyle="w-[31px] h-[31px]"
                    type="submit"
                />
                <Button
                    divstyle="w-full mt-[20px] text-socialColor bg-white font-medium lg:py-3 py-2 text8"
                    btnname="Sign in with Facebook"
                    image={IMAGES.FACEBOOK}
                    imagediv="flex justify-center items-center gap-8"
                    imageStyle="w-[30px] h-[30px]"
                    type="submit"
                />

                <p className="text-white text9 text-center mt-10">Don't you have an account?<span onClick={() => navigate('/register')} className="text-primaryColor underline cursor-pointer px-1">Sign up</span></p>
            </div>


            <AuthRightSide />

        </div>

    );
};

export default Login;



