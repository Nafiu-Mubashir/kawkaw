import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatMakeUsSpecial = () => {
  const content = [
    {
      image: '/about/about1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'Who we are',
    },
    {
      image: '/about/about2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'Who we do',
    },
    {
      image: '/about/about3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'How it work',
    },
  ]
  return (
    <div className='bg-blue-100 p-3 md:p-4 lg:p-8'>
      <div className='text-center mb-4'>
        <h3 className='font-bold'>What Make Us Spcecial?</h3>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisc ing elit.</p>
      </div>
      <div className="flex justify-between flex-col md:flex-row lg:flex-row gap-3 w-full lg:w-[80%] m-auto">
        {
          content.map(({image, content, title}, id) => (
            <div key={id}>
              <Image src={image} alt={'about'} width={970} height={560} className='mb-4' />

             <div className="mb-3">
                <Link href={'/about'} className='hover:text-mine transform delay-75'><h1 className='font-bold'>{title}</h1></Link>
                <p className='text-gray-500'>{content}</p>
             </div>

              <Link href={'/about'} className='hover:text-mine transform delay-75'><h1 className='font-bold-md uppercase'>Read More</h1></Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WhatMakeUsSpecial