import React, { useState } from 'react'
import AuthRightSide from './Components/AuthRightSide'
import RadioButton from '../../Components/RadioButton';
import { IMAGES } from '../../utils/Images';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [selectedOption, setSelectedOption] = useState('Reset via Email');
  const navigate = useNavigate()

  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1 "> 
      <div className="md:w-[70%] w-[90%]  mx-auto py-5 flex flex-col items-center justify-center h-screen">

       <img
                           src={IMAGES.SIGNINIMG}
                           className="block md:hidden mx-auto h-[200px] w-full my-2"
                           alt="Logo"
                         />

        <div >
          <div className="flex md:gap-4 gap-2   items-center   text-start  ">
            <p className="text2  font-medium text-white ">Forgot Password</p>
            <img src={IMAGES.AUTH_LOCK} className='lg:w-[25px]  lg:h-[35px] md:w-[20px] md:h-[20px] w-[16px] h-[16px] object-contain' />
          </div>

          <p className="text8 font-medium text-white md:my-5 my-2">Set the new password for your account so you can login and access all featuress.</p>

          <div className="">

            <RadioButton
              auth
              image={IMAGES.AUTH_RADIO}
              value={selectedOption === 'Reset via Email'}
              onSelect={() => setSelectedOption('Reset via Email')}
              label="Reset via Email"
              desc="You will get the code on your email."
            />

            <RadioButton
              auth
              image={IMAGES.AUTH_RADIO}
              value={selectedOption === 'Reset via Phone Number'}
              onSelect={() => setSelectedOption('Reset via Phone Number')}
              label="Reset via Phone Number"
              desc="You will get the code on your phone number."
            />

          </div>
          <Button
            onPress={()=> navigate('/email')}
            divstyle="w-full my-[10px] text-white bg-goldColor font-medium lg:py-3 py-2 text8 mt-5"
            btnname="Continue"
            type="submit"
          />
        </div>


      </div>
      <AuthRightSide />
    </div>
  )
}

export default ForgotPassword

