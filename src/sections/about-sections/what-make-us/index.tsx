import Image from 'next/image';
import Link from 'next/link';
import { QuoteUp } from 'iconsax-react';
import React from 'react';

const WhatMakeUsSpecial = () => {
  const content = [
    {
      image: '/about/about1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'Who we are',
    },
    {
      image: '/about/about2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'Who we do',
    },
    {
      image: '/about/about3.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'How it work',
    },
  ];
  return (
    <div>
      <div className='bg-[#F0F4FA] p-3 md:p-4 lg:py-[60px]'>
        <div className='text-center mb-5 p-[60px]'>
          <h3 className='font-bold text-[20px]'>What Make Us Spcecial?</h3>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
          </p>
        </div>
        <div className='flex justify-between flex-col md:flex-row lg:flex-row gap-3 w-full lg:w-[80%] m-auto'>
          {content.map(({ image, content, title }, id) => (
            <div key={id}>
              <Image
                src={image}
                alt={'about'}
                width={970}
                height={560}
                className='mb-4'
              />

              <div className='mb-3'>
                <Link
                  href={'/about'}
                  className='hover:text-mine transform delay-75'>
                  <h1 className='font-bold'>{title}</h1>
                </Link>
                <p className='text-gray-500'>{content}</p>
              </div>

              <Link
                href={'/about'}
                className='hover:text-mine transform delay-75'>
                <h1 className='font-bold-md uppercase'>Read More</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='w-[80%] m-auto p-3 md:p-4 lg:p-8 border-b mb-5'>
        <div className='w-[90%] lg:w-[50%] m-auto flex justify-between gap-4 '>
          <QuoteUp
            size=''
            color=''
            className='w-[200px] md:w-[50px] lg:w-[50px] stroke-mine'
          />
          <div>
            <h3 className='font-bold mb-3'>
              Cras tristique turpis justo, eu consequat sem adipiscing ut. Donec
              posuere bibendum metus.
            </h3>
            <p className='text-[14px]'>Tony Nguyen, Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakeUsSpecial;
