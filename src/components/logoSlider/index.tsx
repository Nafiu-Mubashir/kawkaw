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
        className='w-[99%] lg:w-[80%] h-[35vh] md:h-[40vh] lg:h-[15vh] m-auto'>
        {content.map(({ image }, id) => (
          <Carousel.Slide className='mt-10' key={id}>
            <Image
              src={image}
              alt={'image'}
              width={145}
              height={45}
              className='hover:cursor-pointer m-auto'
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default LogoSlider