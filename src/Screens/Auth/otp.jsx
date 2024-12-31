import React, { useState, useRef, useEffect } from 'react';
import AuthRightSide from './Components/AuthRightSide';
import Button from '../../Components/Button';
import { IMAGES } from '../../Utils/images';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState("00:30"); // Start with 30 seconds
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const Ref = useRef(null); 
  
  const navigate = useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/\d/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];
      newCode[index] = '';

      if (index > 0 && !newCode[index]) {
        inputRefs[index - 1].current.focus();
      }

      setCode(newCode);
    }
  };

  const Alert = () => {
    alert("OTP sent to your email");
    // onClickReset(); 
    clearTimer(getDeadTime());  
  };

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60); 
    return {
      total, 
      minutes,
      seconds,
    };
  };

  const startTimer = (endTime) => {
    let { total,  minutes, seconds } = getTimeRemaining(endTime);
    if (total >= 0) {
      setTimer(
         
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (endTime) => {
    setTimer("00:30"); // Reset timer to 30 seconds

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 30); // Set the timer for 30 seconds
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
    return () => {
      if (Ref.current) clearInterval(Ref.current); // Clear the interval when the component unmounts
    };
  }, []);

  const onClickReset = () => {
    navigate('/success')
    // clearTimer(getDeadTime());  
  };

  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1">
      <div className="md:w-[70%] w-[90%]  mx-auto py-5 flex flex-col items-center justify-center h-screen">
        <img
          src={IMAGES.SIGNINIMG}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />

        <div>
          <div className="flex gap-4 items-center text2 text-start">
            <p className="text2 font-medium text-white">Email Verification</p>
            <img
              src={IMAGES.AUTH_MESSAGE}
              className="md:w-[35px] md:h-[35px] w-[20px] h-[20px]"
            />
          </div>

          <p className="text8 font-medium text-white my-2">
            Enter your 4 digits code that you received on your email.
          </p>

          <div className="flex md:gap-5 gap-1 justify-between">
            {inputRefs.map((ref, index) => (
              <div
                key={index}
                className="rounded-md border-[1px] border-borderColor text-center"
              >
                <input
                  ref={ref}
                  className="w-full p-4 focus:outline-none bg-transparent text8 text-center text-goldColor"
                  type="text"
                  maxLength={1}
                  value={code[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  placeholder="-"
                />
              </div>
            ))}
          </div>
          
          <p className='my-2 text-redColor text10 text-center'>{timer}</p>
        <Button
          onPress={onClickReset}
          divstyle="w-full md:my-[10px] my-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8 mt-5"
          btnname="Verify"
          type="submit"
        />
        </div>
      

        <p className="text-white text-center mt-2">
          If you didn't receive a code!
          <span
            onClick={Alert}
            className="text-primaryColor px-1 cursor-pointer underline"
          >
            Resend
          </span>
        </p>
      </div>
      <AuthRightSide />
    </div>
  );
};

export default Otp;
