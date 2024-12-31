import React, { useState } from 'react';
import DeliveryDetails from './Components/Details';
import DeliveryMethod from './Components/Delivery';
import Payment from './Components/Payment';
import SmallCard from './Components/SmallCard';
import Card from './Components/Card';

const Index = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className=' bg-[#000000]   flex justify-center gap-10 min-h-screen py-10'>

      <div className="w-[80%] grid lg:grid-cols-2 grid-cols-1     place-self-center justify-items-center justify-self-center ">




        <div className='w-[90%] '>

          <SmallCard />

          {/* Step 1 - Delivery Details */}
          <div style={{ display: activeStep === 1 ? 'block' : 'none' }}>
            <DeliveryDetails  setActiveStep={setActiveStep} />
          </div>

          {/* Step 2 - Delivery Method */}
          <div style={{ display: activeStep === 2 ? 'block' : 'none' }}>
            <DeliveryMethod setActiveStep={setActiveStep} />
          </div>

          {/* Step 3 - Payment */}
          <div style={{ display: activeStep === 3 ? 'block' : 'none' }}>
            <Payment setActiveStep={setActiveStep} />
          </div>
        </div>

        <div className='w-[90%]  '>
          <Card />
        </div>
      </div>

    </div>
  );
};

export default Index;
