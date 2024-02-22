import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import React from 'react';

const Place = () => {
  const content = [
    {
      image: '/about/pl1.webp',
    },
    {
      image: '/about/pl2.webp',
    },
    {
      image: '/about/pl3.webp',
    },
    {
      image: '/about/pl4.webp',
    },
    {
      image: '/about/pl5.webp',
    },
    {
      image: '/about/pl6.jpg',
    },
  ];
  return (
    <div>
      <div className=''>
        <h3 className='font-bold text-[22px] lg:text-[28px] text-center'>
          A Great Place to Grow
        </h3>
      </div>
      <Carousel
        withControls={false}
        withIndicators
        height={550}
        slideSize={{ base: '100%', sm: '50%', md: '20%' }}
        slideGap={{ base: 0, sm: 'sm', lg: 'lg', md: 'md', xl: 'xl', xs: 'xs' }}
        slidesToScroll={3}
        loop
        align='start'
        styles={{
          container: {},
          control: {},
          controls: {},
          indicator: {
            borderRadius: '50px',
            width: '10px',
            height: '10px',
            backgroundColor: '#FFB606',
          },
        }}
        classNames={{}}
        className='w-[99%] h-[35vh] md:h-[40vh] lg:h-[35vh] m-auto'>
        {content.map(({ image }, id) => (
          <Carousel.Slide className='mt-10' key={id}>
            <Image
              src={image}
              alt={'image'}
              width={970}
              height={560}
              className='hover:cursor-pointer h-[150px] md:h-[200px] lg:h-[200px] w-[300px] md:w-[350px] lg:w-[400px] m-auto'
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Place;
