import { Folder, Profile2User } from 'iconsax-react'

import Image from 'next/image'
import React from 'react'

interface CardProp {
  authur: string;
  title: string;
  price: string | number;
  image: string,
  description: string;
  members: number;
}

const CourseCard = ({ authur, title, price, image, description, members }: CardProp) => {
  return (
    <div className='flex flex-col lg:flex-row items-center border-b p-3 gap-4 mb-3'>
      <div className='w-[400px'>
        <Image width={400} height={300} src={image} alt="" className='w-[400px] h-[202.5px] cursor-pointer transition-transform transform hover:-translate-y-1 hover:scale-110 duration-500 ease-in-out' />
      </div>
      <div>
        <h1 className='font-bold mb-3'>{title}</h1>
        <p className='mb-3'>{description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image width={200} height={200} src="/instructor.webp" alt="" className='rounded-full w-[35px] border bg-white h-[35px]' />
            <p>{authur}</p>
          </div>
          <div className="flex justify-between gap-3 items-center p-3 cursor-pointer">
            <div className='flex gap-3'>
              <p className='flex gap-1 items-center'>
                <Folder color="#555555" size={16} />
                0
              </p>
              <p className='flex gap-1 items-center'>
                <Profile2User color="#555555" size={16} />
                {members}
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

export default CourseCard