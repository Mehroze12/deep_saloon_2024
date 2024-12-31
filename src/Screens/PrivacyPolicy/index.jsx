import React from 'react' 
import TopHeader from '../../Components/TopHeader' 
import PrivacyContent from './Content'

const PrivacyPolicy = () => {
  return (
    <div className='bg-secondaryColor'>
      <TopHeader name="Privacy Policy"/> 
      <PrivacyContent /> 
    </div>
  )
}

export default PrivacyPolicy