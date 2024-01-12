import { Folder, Minus, Profile2User } from 'iconsax-react'
import React, { useState } from 'react'

import Image from 'next/image';
import MoreButton from '~/components/more-button';

interface CardProp {
  authur: string;
  classes: string;
  title: string;
  price: string | number;
  image: string;
  members: number;
  amount: number
}
const CoursesCard = ({ authur, title, price, image, members, classes, amount }: CardProp) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className={`shadow-md w-full md:w-[350px] lg:w-[300px] h-[500px] overflow-hidden ${classes}`}>
        <div className='relative'>
          <Image width={400} height={300} src={image} alt="" className='h-[250px] m-auto cursor-pointer transition-transform transform hover:-translate-y-1 hover:scale-110 duration-500 ease-in-out' />
          <Image width={200} height={200} src="/instructor.webp" alt="" className='rounded-full w-[90px]  border bg-white p-1 absolute h-[90px] left-[100px] md:left-[120px] lg:left-[100px] bottom-[-30px]' />
         <MoreButton classes={'absolute px-2 py-1 top-[120px] left-[65px]'} to={'/courses'} label={'Read more'} />
        </div>
        <div className='p-3'>
          <div className='mb-3 mt-3 p-3 text-center'>
            <p className='text-gray-400 text-md mb-3 mt-5'>{authur}</p>
            <p className='text-[14px] lg:text-[16px] font-bold cursor-pointer hover:text-mine transform transition duration-600 delay-75 ease-in'>{title}</p>
          </div>
          <div className='boder border-black w-full relative'>
            <Minus color="#FFB606" className='block m-auto top-[-11px] left-[130px] lg:left-[150px] absolute' />
          </div>
          <div className="relative bottom-0 flex justify-between items-center p-3 border-t-2 cursor-pointer">
            <div className='flex gap-3'>
              <p className='flex gap-2 items-center'>
                <Folder color="#555555" size={16} />
                0
              </p>
              <p className='flex gap-2 items-center'>
                <Profile2User color="#555555" size={16} />
                {members}
              </p>
            </div>
            <p className={`${price === 'Free' ? 'text-green-600' : 'text-red-600'} font-bold`}>
              {
                price === 'Paid'
                  ?
                  <span>{`$${amount}.00`}</span>
                  :
                  <span>{price}</span>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard