import React from 'react'
import { IMAGES } from '../../../utils/Images'

const AuthRightSide = () => {
  return (
    <div className="px-6 py-2 md:block  hidden">
        <img src={IMAGES.SIGNINIMG} className=" w-full h-screen" />
      </div>
  )
}

export default AuthRightSide