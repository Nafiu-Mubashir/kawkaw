import React from 'react';
import { Star1 } from 'iconsax-react';

const Review = () => {
  const ratings = [
    {
      num: 1,
      percentage: '0%',
    },
    {
      num: 2,
      percentage: '0%',
    },
    {
      num: 3,
      percentage: '0%',
    },
    {
      num: 4,
      percentage: '0%',
    },
    {
      num: 5,
      percentage: '0%',
    },
  ];
  return (
    <div className='p-8'>
      <h2 className='text-[16px] font-bold'>Review</h2>

      <div className='flex flex-col lg:flex-row gap-3'>
        <div className='md:w-[55%] lg:w-[30%]'>
          <p className='text[15px] mb-1'>Average Rating</p>
          <div className='border p-[35px]  text-center'>
            <p className='text-[72px] font-bold'>0</p>
            <div className='flex items-center justify-center'>
              <Star1 size='18' color='#FFB606' />
              <Star1 size='18' color='#FFB606' />
              <Star1 size='18' color='#FFB606' />
              <Star1 size='18' color='#FFB606' />
            </div>
            <p>0 rating</p>
          </div>
        </div>

        <div className='md:w-[70%] lg:w-[40%]'>
          <p className='text[15px] mb-1'>Detailed Rating</p>
          <div className=' border p-3'>
            {ratings.reverse().map(({ num, percentage }, id) => (
              <div className='flex items-center gap-2 mt-2' key={id}>
                <p className=''>{num}</p>
                <div className='w-full bg-gray-200 h-2.5'></div>
                <p className=''>{percentage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
