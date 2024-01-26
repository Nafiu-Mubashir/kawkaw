import React from 'react'

const Feedbacks = () => {
  return (
    <div>
      <div className='mb-4 p-8'>
        <div className='mb-5'>
          <h3 className='font-bold text-[20px] text-center'>What People Say</h3>
          <p className='text-center text-gray-400'>How real people said about Education WordPress Theme.</p>
        </div>
      </div>
      <div className='w-full md:w-[90%] lg:w-[50%] m-auto border h-[50vh] relative top-[1px]'>
        <div className='absolute top-[50px] md:top-[100px] lg:top-[150px]'>
          <p className='text-center w-[80%] lg:w-[70%] m-auto text-[15px] mb-3'>Subscribe now and receive weekly newsletter with educational materials, new courses, interesting posts, popular books and much more!</p>
          <div className="w-full md:w-[80%] m-auto h-full flex flex-col gap-3 md:flex-row md:gap-0 lg:flex-row lg:gap-0 justify-center">
            <input type="search" id="" className="block m-auto lg:m-0 h-[50px] p-2.5 w-[80%] lg:w-[70%] border z-20 text-sm text-gray-900 border-gray-200 outline-none focus:ring-mine focus:border-mine" placeholder="Your email here" required />
            <button type="submit" className="block m-auto lg:m-0 w-[150px] p-2 lg:p-3 text-sm h-[40px] md:h-[50px] lg:h-[50px] text-black bg-mine border border-mine focus:ring-4 focus:outline-none focus:ring-mine font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedbacks