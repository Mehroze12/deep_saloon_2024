import React from 'react'
import Inputfield from '../../../Components/Inputfield'
import Button from '../../../Components/Button'
import Divider from '../../../Components/Divider'
import { IMAGES } from '../../../utils/Images'

const AuthLeftSide = ( ) => {
    return (
        <div className="md:w-[70%] w-[90%] overflow-auto custom-scrollbar mx-auto h-screen py-5">
            <div>
                <img
                    src={IMAGES.SIGNINIMG}
                    className="block md:hidden mx-auto h-[200px] w-[280px]"
                    alt="Logo"
                />
            </div> 
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
                    labelstyle="text-white text8"
                    innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
                    inputStyle="w-full px-5 py-3 bg-transparent text8"
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                />

                <Inputfield
                    divstyle="md:mt-7 mt-2"
                    Labelname="Password"
                    labelstyle="text-white text8"
                    innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
                    inputStyle="w-full px-5 py-3 bg-transparent text8"
                    type="password"
                    placeholder="Your password"
                    name="password"
                />

            </div>

            <p className="text-right text-textRedColor my-5 cursor-pointer text8">
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

            <p className="text-white  text-center mt-10">Don't you have an account?<span className="text-primaryColor"> Sign up</span></p>
        </div>
    )
}

export default AuthLeftSide