import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import React from 'react'

const LogoSlider = () => {
   const content = [
     {
       image: '/contact-logos/banner1.webp',
     },
     {
       image: '/contact-logos/banner2.webp',
     },
     {
       image: '/contact-logos/banner3.png',
     },
     {
       image: '/contact-logos/banner6.png',
     },
     {
       image: '/contact-logos/banner7.webp',
     },
     {
       image: '/contact-logos/banner8.webp',
     },
   ];
  return (
    <div>
      <Carousel
        // withControls={false}
        withIndicators={false}
        height={550}
        slideSize={{ base: '100%', sm: '50%', md: '20%' }}
        slideGap={{ base: 0, sm: 'sm', lg: 'lg', md: 'md', xl: 'xl', xs: 'xs' }}
        slidesToScroll={1}
        loop
        controlsOffset={'xs'}
        align='start'
        styles={{
          container: {},
          control: {},
          controls: {},
          indicator: {
            borderRadius: '50px',
            width: '10px',
            height: '10px',
            // backgroundColor: '#FFB606',
          },
        }}
        classNames={{
          control: '!bg-transparent !border-none !shadow-none !hover:bg-none mt-[20px',
          
        }}
        className='w-[99%] lg:w-[80%] h-[20vh] md:h-[20vh] lg:h-[15vh] m-auto lg:px-12'>
        {content.map(({ image }, id) => (
          <Carousel.Slide className='mt-10' key={id}>
            <Image
              src={image}
              alt={'image'}
              width={145}
              height={45}
              className='hover:cursor-pointer m-auto grayscale hover:grayscale-0'
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default LogoSlider