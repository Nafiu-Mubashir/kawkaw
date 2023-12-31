import React, { useEffect, useState } from 'react'

import { calculateTimeRemaining } from '~/utils';

const RegisterNow = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{
      backgroundImage: "url('/bg-slide-2.webp')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "center"
    }}
      className='p-2 lg:p-5 w-full'
    >
      <div className='w-full md:w-[90%] lg:w-[80%] m-auto'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
          <div className=''>
            <div className='mb-3'>
              <p className='text-white'>GET 100 OF ONLINE COURSES FOR FREE</p>
              <h3 className='font-bold text-[25px] md:text-[30px] lg:text-[50px] text-white'>REGISTER NOW</h3>
            </div>

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

          <div className='p-2 lg:p-4 flex justify-end h-[70vh] lg:h-[60vh]'>
            <form className="w-full md:w-[80%] lg:w-[70%] bg-white shadow-md" action="#" method="POST">
              <div className='bg-mine p-6 rounded-b-[50%] h-[35%] lg:h-[40%]'>
                <h3 className='text-white font-bold text-center text-[16px] lg:text-[25px] mt-5 lg:mt-8'>Create your free account now and immediately get access to 100s of online courses.</h3>
              </div>
              <div className='w-[90%] lg:w-[70%] m-auto mt-5'>

                <div className="mt-2">
                  <input id="text" name="text" type="text" autoComplete="text" placeholder='Your name*' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>

                <div className="mt-2">
                  <input id="email" name="email" type="email" placeholder='Email*' autoComplete="email" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>

                <div className="mt-2">
                  <input id="phone" name="phone" type="phone" placeholder='Phone*' autoComplete="phone" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>

                <div className='mt-2'>
                  <button type="submit" className="uppercase flex w-full justify-center py-3 px-3 text-sm font-semibold leading-6 bg-black text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get it now</button>
                </div>
                
              </div>
            </form>
          </div>
        </div >
      </div >
    </div >
  )
}

export default RegisterNow