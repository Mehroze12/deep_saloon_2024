import React from 'react';
import AuthRightSide from './Components/AuthRightSide';
import { IMAGES } from '../../utils/Images';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const Successfull = () => {

    const navigate = useNavigate()

    return (
        <div className="w-full grid md:grid-cols-2 grid-rows-1 ">
            <div className="md:w-[70%]  w-[90%] mx-auto py-5 flex flex-col items-center justify-center h-screen">
                <img
                    src={IMAGES.SIGNINIMG}
                    className="block md:hidden mx-auto h-[200px] w-full my-2"
                    alt="Logo"
                />

                <img
                    src={IMAGES.AUTH_SUCCESS}
                    className="mx-auto md:h-[100px] md:w-[100px] h-[100px] w-[100px] object-contain "
                    alt="Logo"
                />

                <p className="text2 font-medium text-white md:mt-5 mt-2">Successfully</p>
                <p className="text8 text-center font-medium text-white mt-5">Your email has successfully verified.</p>

                <Button
                onPress={() => navigate('/login')}
                    divstyle="focus:outline-none w-full md:mb-[10px] mb-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8 mt-5"
                    btnname="Continue"
                    type="submit"
                />

            </div>
            <AuthRightSide />
        </div>
    );
};

export default Successfull;
