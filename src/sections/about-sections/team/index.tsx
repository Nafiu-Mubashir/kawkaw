import { Facebook, Xrp, Youtube } from 'iconsax-react'

import Image from 'next/image'
import React from 'react'

const Team = () => {
  const content = [
    {
      title: 'Owen Christ',
      content: 'After working as a software developer and...',
      image: '/about/team2.jpg',
    },
    {
      title: 'Namrata Parmar',
      content: 'I came to Eduma ten years ago',
      image: '/about/team3.jpg',
    },
    {
      title: 'George Clinton',
      content: 'After working as a software developer and...',
      image: '/about/team3.webp',
    },
    {
      title: 'George Richards',
      content: 'After working as a software developer and...',
      image: '/about/team1.jpg',
    },
    {
      title: 'Betty Milner',
      content: 'After working as a software developer and...',
      image: '/about/team2.webp',
    },
  ]
  return (
    <div className='p-2 md:p-3 lg:p-8'>
      <div className='w-full lg:w-[50%] m-auto text-center p-3'>
        <h3 className='font-bold '>Meet Our Team</h3>
        <p className='text-gray-400'>Plugins your themes with even more features.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full md:w-[95%] lg:w-[80%] m-auto justify-between mt-5 mb-5">
        {
          content.map(({ title, content, image }, id) => (
            <div className="w-full text-center odd:hidden md:even:hidden md:odd:block lg:odd:block lg:even:block" key={id}>
              <div className='rounded-full w-[130px] lg:w-[200px] h-[130px] lg:h-[200px] m-auto border-[3px] border-dotted p-2 relative group transition-transform transform duration-500 ease-in-out'>
                <Image src={image} width={200} height={200} alt={'image'} className='rounded-full group-hover:brightness-50 block m-auto' />
              <div className='hidden group-hover:block'>
                <div className='flex items-center justify-center gap-2 absolute top-[50px] lg:top-[100px] left-0 right-0 '>
                  <Facebook size={20} color="white" className='hover:stroke-mine'/>
                  <Xrp size={20} color="white" className='hover:stroke-mine'/>
                  <Youtube size={20} color="white" variant="Bold" className='hover:fill-mine'/>
                </div>
              </div>
              </div>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))
        }
      </div>
      <button className='border border-mine p-3 w-[200px] rounded block m-auto mt-4'>View Our Team</button>
    </div>
  )
}

export default Team