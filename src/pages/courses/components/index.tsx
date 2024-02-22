import { Folder, Profile2User } from 'iconsax-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RootState } from '~/lib/store';
import { useSelector } from 'react-redux';

const LatestCourses = () => {
  const courses = useSelector((state: RootState) => state.course.course);
  return (
    <div>
      <h1 className='font-bold text-[18px] mb-3'>Latest Courses</h1>
      {courses.slice(0, 3).map(({ title, price, image, amount }, id) => (
        <div
          className='flex items-center gap-4 mb-3 text-[15px] lg:text-[16px] w-full m-auto md:w-full lg:w-full'
          key={id}>
          <Image
            width={400}
            height={300}
            src={image}
            alt=''
            className='w-[100px] md:w-[65px] lg:w-[90px] h-[100px] md:h-[65px] lg:h-[90px] cursor-pointer'
          />
          <div>
            <Link href={`/courses/${id}`}>
              <h1 className='font-bold text-[15px] hover:text-mine cursor-pointer'>
                {title}
              </h1>
            </Link>
            <div className='flex justify-between items-center'>
              <div className='flex justify-between gap-3 items-center p- cursor-pointer'>
                <p
                  className={`${
                    price === 'Free' ? 'text-green-600' : 'text-red-600'
                  } font-bold`}>
                  {price === 'Paid' ? (
                    <span>{`$${amount}.00`}</span>
                  ) : (
                    <span>{price}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestCourses;
