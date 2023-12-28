import { Navabr } from '~/components/navbar';
import React from 'react'

const HeroSection = () => {
  const fallBackImg = '/top-heading-course-new.webp';
  return (
    <div
      style={{
        backgroundImage: `url('${fallBackImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className='h-screen'
    >
      <Navabr />
      
      <div className='w-[80%] m-auto mt-[300px]'>
        <p className='text-white font-bol text-[30px] uppercase'>The Best School</p>
        <h3 className='text-white font-bold text-[50px] uppercase'>Education</h3>
        <button className='bg-mine p-3 text-white rounded px-4'>
          Join Us 
        </button>
      </div>
    </div>
  )
}

export default HeroSection