import React, { useRef } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import CarouselCards from './component/carousel-cards';
import { Navabr } from '~/components/navbar';

const HeroSection = () => {
  const slideOne = '/carousel1.webp';
  const slideTwo = '/bg-slide-2.webp'
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <div>

      <Navabr position='fixed'/>
      <Carousel
        // withIndicators
        height={"100%"}
        loop
        plugins={[autoplay.current]}
        className='w-ful h-screen mb-4'
      >
        <Carousel.Slide>
          <div
            style={{
              backgroundImage: `url('${slideOne}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            className='h-screen'
          >
            <div className='absolute top-[300px] lg:top-[400px] left-5 lg:left-[250px]'>
              <p className='text-white font-bol text-[30px] lg:text-[40px] uppercase'>The Best School</p>
              <h3 className='text-white font-bold text-[50px] lg:text-[90px] uppercase'>Education</h3>
              <button className='bg-mine p-3 font-bold text-[20px] rounded px-3 lg:px-6'>
                Join Us
              </button>
            </div>

            <div className='relative hidden md:block lg:block md:top-[500px] lg:top-[700px]'>
              <CarouselCards />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              backgroundImage: `url('${slideTwo}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            className='h-screen'
          >
            <div className='absolute top-[300px] lg:top-[400px] left-5 lg:left-[250px]'>
              <p className='text-white font-bol text-[30px] lg:text-[40px] uppercase'>The Best School</p>
              <h3 className='text-white font-bold text-[50px] lg:text-[90px] uppercase'>Education</h3>
              <button className='bg-mine p-3 font-bold text-[20px] rounded px-3 lg:px-6'>
                Join Us
              </button>
            </div>
          <div className='relative hidden md:block lg:block md:top-[500px] lg:top-[700px]'>
            <CarouselCards />
          </div>
          </div>
        </Carousel.Slide>
      </Carousel>
      <div className='block md:hidden lg:hidden mt-[50px] mb-4'>
        <CarouselCards />
      </div>
    </div>
  )
}

export default HeroSection