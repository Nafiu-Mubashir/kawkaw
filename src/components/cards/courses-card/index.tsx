import { Folder, Minus, Profile2User } from 'iconsax-react'

import Image from 'next/image';
import React from 'react'

interface CardProp {
  name: string;
  title: string;
  price: string | number;
  image: string
}
const CoursesCard = ({ name, title, price, image }: CardProp) => {
  return (
    <div>
      <div className='shadow-md w-full md:w-[350px] lg:w-[350px] overflow-hidden'>
        <div className='relative'>
          <Image width={400} height={300} src={image} alt="" className='h-[300px] cursor-pointer transition-transform transform hover:-translate-y-1 hover:scale-110 duration-500 ease-in-out' />
          <Image width={200} height={200} src="/instructor.webp" alt="" className='rounded-full w-[90px]  border bg-white p-1 absolute h-[90px] left-[105px]` md:left-[120px] lg:left-[125px] bottom-[-50px]' />
        </div>
        <div className='p-4'>
          <div className='mb-4 mt-5 p-4 text-center'>
            <p className='text-gray-400 text-md mb-5 mt-5'>{name}</p>
            <p className='text-[18px] lg:text-[25px] font-bold cursor-pointer hover:text-mine transform transition duration-600 delay-75 ease-in'>{title}</p>
          </div>
          <div className='boder border-black w-full relative'>
            <Minus color="#FFB606" className='block m-auto top-[-11px] left-[130px] lg:left-[150px] absolute' />
          </div>
          <div className="flex justify-between items-center p-4 border-t-2 cursor-pointer">
            <div className='flex gap-3'>
              <p className='flex gap-2 items-center'>
                <Folder color="#555555" size={16} />
                0
              </p>
              <p className='flex gap-2 items-center'>
                <Profile2User color="#555555" size={16} />
                32
              </p>
            </div>
            <p className={`${price === 'Free' ? 'text-green-600' : 'text-red-600'} font-bold`}>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard