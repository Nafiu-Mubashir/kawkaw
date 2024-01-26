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
    <div className={`relative shadow-md w-full md:w-[280px] lg:w-[290px] h-[500px] overflow-hidden ${classes}`}>
      <div className='relative md:w-[90]'>
        <div className='group'>
          <Image width={400} height={300} src={image} alt="" className='h-[250px] m-auto cursor-pointer transition-transform transform group-hover:brightness-75 hover:-translate-y-1 hover:scale-110 duration-500 ease-in-out' />
          <MoreButton classes={'absolute top-[120px] left-[65px] hidden group-hover:block'} to={'/courses'} label={'Read more'} />
        </div>
        <Image width={200} height={200} src="/instructor.webp" alt="" className='rounded-full w-[90px] border bg-white p-1 absolute h-[90px] left-0 m-auto bottom-[-30px] right-0' />
      </div>
      <div className='mb-3 mt-3 p-3 text-center absolute'>
        <p className='text-gray-400 text-md mb-3 mt-5'>{authur}</p>
        <p className='text-[14px] lg:text-[16px] font-bold cursor-pointer hover:text-mine transform transition duration-600 delay-75 ease-in'>{title}</p>
      </div>
      <div className='p-3 absolute md:w-[90] bottom-0 w-full '>
        <div className='boder border-black w-full relative'>
          <Minus color="#FFB606" className='block m-auto top-[-11.5px] left-0 right-0 absolute' />
        </div>
        <div className="right-[-5px] flex justify-between items-center p-3 border-t-2 bg-white">
          <div className='flex gap-3'>
            <p className='flex gap-2 items-center'>
              <Folder color="#555555" size={16} />
              0
            </p>
            <p className='flex gap-2 items-center'>
              <Profile2User color="#555555" size={16} className='hover:stroke-mine' />
              {members}
            </p>
          </div>
          <p className={`${price === 'Free' ? 'text-green-600' : 'text-red-600'} font-bold`}>
            {price === 'Paid' ? `$${amount}.00` : price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard