import 'react-multi-carousel/lib/styles.css';

import { Carousel } from '@mantine/carousel';
import CoursesCard from '~/components/cards/courses-card/home-page';
import MoreButton from '~/components/more-button';
import React from 'react';
import { RootState } from '~/lib/store';
import { useSelector } from 'react-redux';

const PopularCourses = () => {
  const carouselContent = useSelector(
    (state: RootState) => state.course.course
  );

  return (
    <div className='w-[95%] lg:w-[90%] m-auto mb-4 p- lg:p-8 relative'>
      <div className='mb-6'>
        <h3 className='font-bold text-[22px] lg:text-[28px]'>Popular Course</h3>
        <p className='text-[14px] lg:text-[15px] text-gray-500'>
          Limitless Learning, more possible
        </p>
      </div>
      <Carousel
        withIndicators
        height={550}
        slideSize={{ base: '100%', sm: '50%', md: '20%' }}
        slideGap={{ base: 0, sm: 'sm', lg: 'lg', md: 'md', xl: 'xl', xs: 'xs' }}
        slidesToScroll={1}
        loop
        align='start'
        styles={{
          container: {},
          control: {
            borderRadius: 'none',
            height: '40px',
            width: '40px',
            backgroundColor: 'none',
            boxShadow: 'none !important',
          },
          controls: {
            position: 'absolute',
            top: '-70px',
            left: 'auto',
            gap: '10px',
          },
          indicator: {
            borderRadius: '50px',
            width: '10px',
            height: '10px',
            backgroundColor: '#FFB606',
          },
        }}
        classNames={{
          control:
            '!hidden lg:!flex !rounded-md hover:!border-mine !border-black border !rounded-none !bg-transparent',
          indicator: '!flex lg:!hidden',
        }}
        className='w-[98%] m-auto'>
        {carouselContent
          .slice(0, 6)
          .map(({ authur, title, price, image, members, amount }, ind) => (
            <Carousel.Slide className='h-full' key={ind}>
              <CoursesCard
                authur={authur}
                title={title}
                price={price}
                image={image}
                key={ind}
                classes={'md:w-[280px] lg:w-[290px]'}
                members={members}
                amount={amount}
              />
            </Carousel.Slide>
          ))}
      </Carousel>
      <MoreButton
        classes='mt-10 lg:mt-[-80px]'
        to='/courses'
        label='View More'
      />
    </div>
  );
};

export default PopularCourses;
