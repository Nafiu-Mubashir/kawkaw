import Image from 'next/image';
import React from 'react';

const Instructor = ({
  author,
  authorDetails,
}: {
  author: string | undefined;
  authorDetails: string | undefined;
}) => {
  return (
    <div className='p-4'>
      <div className='flex items-cente gap-3'>
        <Image
          width={200}
          height={200}
          src='/instructor.webp'
          alt=''
          className='rounded-full w-[100px] border bg-white h-[100px]'
        />
        <div>
          <div className='mb-3'>
            <p className='text-[14px] font-bold'>{author}</p>
            <p className='text-[12px]'>{'Professor'}</p>
          </div>
          <p className='text-[14px]'>{authorDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
