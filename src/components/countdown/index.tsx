import React, { useEffect, useState } from 'react'

import { calculateTimeRemaining } from '~/utils';

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining({ date: 'Feb, 29, 2024' }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining({ date: 'Feb, 29, 2024' }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div>
          <div className='rounded-full border-white border-2 size-[75px] lg:size-[150px] text-center font-bold text-white text-[14px] lg:text-[20px]'>
            <p className='mt-2 lg:mt-5 text-[20px] lg:text-[40px]'>{timeRemaining.days}</p>
            <p>days</p>
          </div>
        </div>

        <div className='rounded-full border-white border-2 size-[75px] lg:size-[150px] text-center font-bold text-white text-[14px] lg:text-[20px]'>
          <p className='mt-2 lg:mt-5 text-[20px] lg:text-[40px]'>{timeRemaining.hours}</p>
          <p>hours</p>
        </div>

        <div className='rounded-full border-white border-2 size-[75px] lg:size-[150px] text-center font-bold text-white text-[14px] lg:text-[20px]'>
          <p className='mt-2 lg:mt-5 text-[20px] lg:text-[40px]'>{timeRemaining.minutes}</p>
          <p>minutes</p>
        </div>

        <div className='rounded-full border-white border-2 size-[75px] lg:size-[150px] text-center font-bold text-white text-[14px] lg:text-[20px]'>
          <p className='mt-2 lg:mt-5 text-[20px] lg:text-[40px]'>{timeRemaining.seconds}</p>
          <p>seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Countdown