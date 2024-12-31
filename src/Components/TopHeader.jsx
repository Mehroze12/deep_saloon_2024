import React from 'react'
import { IMAGES } from '../utils/Images'

const TopHeader = ({ name }) => {
    return (
        <main className="bg-Navbar py-16"> 
                <div className='flex justify-center'>
                    <p className='absolute text-white font-bold subheading lg:top-[1%] md:top-[3%] top-[7%]'>{name}</p>
                </div>
                <img src={IMAGES.DESIGN} className='w-full h-[100px] ' />
                <div className='w-full h-full'>
                </div> 
        </main>
    )
}

export default TopHeader