import React from 'react'
import AuthRightSide from './Components/AuthRightSide'
import { IMAGES } from '../../utils/Images';
import Button from '../../Components/Button';
import Inputfield from '../../Components/Inputfield';

const SetPassword = () => {
    return (
        <div className="w-full grid md:grid-cols-2 grid-rows-1 ">
            <div className="md:w-[70%] w-[90%] mx-auto py-5 flex flex-col items-center justify-center h-screen">

                <img
                    src={IMAGES.SIGNINIMG}
                    className="block md:hidden mx-auto h-[200px] w-full my-2"
                    alt="Logo"
                />

                <div >
                    <div className="flex gap-4 items-center text2  text-start  ">
                        <p className="text2  font-medium text-white ">New Password</p>
                        <p>👋</p>
                    </div>

                    <p className="text8 font-medium text-white md:mt-5 mt-2">Set the new password for your account so you can login and access all featuress.</p>

                    <div className="">

                        <Inputfield
                            divstyle="md:mt-7 mt-2"
                            Labelname="New Password"
                            labelstyle="text-white text8"
                            innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
                            inputStyle="w-full px-5 md:py-3 py-2 bg-transparent text8"
                            type="email"
                            placeholder="Enter your Email"
                            name="email"
                        />

                        <Inputfield
                            divstyle="md:mt-7 mt-2"
                            Labelname="Repeat Password"
                            labelstyle="text-white text8"
                            innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
                            inputStyle="w-full px-5 md:py-3 py-2 bg-transparent text8"
                            type="password"
                            placeholder="Your password"
                            name="password"
                        />

                    </div>
                    <Button
                        divstyle="w-full md:mb-[10px] mb-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8 mt-5"
                        btnname="Continue"
                        type="submit"
                    />
                </div>


            </div>
            <AuthRightSide />
        </div>
    );
}

export default SetPassword