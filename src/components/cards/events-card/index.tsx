import { Location, Timer1 } from 'iconsax-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventsProp {
  date: {
    day: string;
    month: string;
  };
  time: {
    from: string;
    to: string;
  };
  title: string;
  location: string;
  content: string;
  image: string;
  id: string;
}

const EventsCard = ({
  title,
  content,
  date,
  image,
  location,
  time,
  id,
}: EventsProp) => {
  return (
    <div className='mb-3'>
      <div className='flex flex-col-reverse md:flex-row lg:flex-row justify-between gap-2 relative border-b lg:p-3'>
        <div className='absolute md:relative lg:relative top-3 md:top-0 lg:top-0 left-3 md:left-0 lg:left-0 bg-white md:bg-none lg:bg-none p-2 md:p-0 lg:p-0 text-center md: lg:'>
          <p className='text-[16px]'>
            <span className='text-[50px] lg:text-[60px] leading-9 text-mine font-bold'>
              {date.day}
            </span>{' '}
            <br /> {date.month}
          </p>
        </div>
        <div className='lg:w-[50%] text-[14px]'>
          <Link href={`/events/${id}`} className='font-bold'>
            <h3 className='fomt-bold text-[18px] lg:text-[22px] hover:text-mine mb-3 lg:mb-4'>
              {title}
            </h3>
          </Link>
          <div className='flex gap-3 mb-3 lg:mb-4'>
            <div className='flex gap-1 items-center'>
              <Timer1 size='20' color='gray' />
              <p className='text-gray-400'>
                {time.from} - {time.to}
              </p>
            </div>
            <div className='flex gap-1 items-center'>
              <Location size='20' color='gray' />
              <p className='text-gray-400'>{location}</p>
            </div>
          </div>
          <p className='text-[15px]'>{content}</p>
        </div>
        <div>
          <Image
            width={450}
            height={238}
            src={image}
            alt=''
            className='w-full md:w-[300px] lg:w-[270px]'
          />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
