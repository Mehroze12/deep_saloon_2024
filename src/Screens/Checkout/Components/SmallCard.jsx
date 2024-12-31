import React from 'react'

const SmallCard = () => {
  return (
    <div className="bg-gray p-5 flex items-center justify-between">
        <p className='text-white text7'>Logged in <span>mehroze@gmail.com</span></p>
        <p className='text-white text7 underline cursor-pointer'>Logout</p>
    </div>
  )
}

export default SmallCard