import React, { useRef } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import CarouselCards from './component/carousel-cards';
import { Navabr } from '~/components/navbar';

const HeroSection = () => {
  const slideOne = '/carousel1.webp';
  const slideTwo = '/bg-slide-2.webp';
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <div>
      <Navabr position='fixed' />
      <Carousel
        // withIndicators
        height={'100%'}
        loop
        plugins={[autoplay.current]}
        className='w-ful h-screen mb-4'
        classNames={{
          control:
            'h-[50px] w-[50px] !bg-transparent hover:!bg-black !border-transparent',
        }}>
        <Carousel.Slide>
          <div
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${slideOne}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className='h-screen'>
            <div className='absolute top-[300px] lg:top-[250px] left-5 lg:left-[250px] leading-[2.6rem]'>
              <p className='text-white font-bol text-[15px] lg:text-[20px] uppercase'>
                The Best School
              </p>
              <h3 className='text-white font-bold text-[30px] lg:text-[70px] uppercase'>
                Education
              </h3>
              <button className='bg-mine w-[120px] text-[16px] mt-10'>
                Join Us
              </button>
            </div>

            <div className='relative hidden md:block lg:block md:top-[500px] lg:top-[600px]'>
              <CarouselCards />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${slideTwo}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className='h-screen'>
            <div className='absolute top-[300px] lg:top-[250px] left-5 lg:left-[250px] leading-[2.6rem]'>
              <p className='text-white font-bol text-[15px] lg:text-[20px] uppercase'>
                The Best School
              </p>
              <h3 className='text-white font-bold text-[20px] lg:text-[70px] uppercase'>
                Education
              </h3>
              <button className='bg-mine w-[120px] text-[16px] mt-10'>
                Join Us
              </button>
            </div>
            <div className='relative hidden md:block lg:block md:top-[500px] lg:top-[600px]'>
              <CarouselCards />
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
      <div className='block md:hidden lg:hidden mt-[50px] mb-4'>
        <CarouselCards />
      </div>
    </div>
  );
};

export default HeroSection;
