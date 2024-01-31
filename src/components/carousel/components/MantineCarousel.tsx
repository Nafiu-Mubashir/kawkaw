import { Carousel } from '@mantine/carousel';
import CoursesCard from '~/components/cards/courses-card/home-page';
import React from 'react';
import { RootState } from '~/lib/store';
import { useSelector } from 'react-redux';

export default function MantineCarousel() {
  const carouselContent = useSelector(
    (state: RootState) => state.course.course
  );
  return (
    <div>
      <Carousel
        // slideSize="70%" height={200} slideGap="md"
        withIndicators
        height={550}
        slideSize={{ base: '100%', sm: '50%', md: '20%' }}
        slideGap={{ base: 0, sm: 'sm', lg: 'lg', md: 'md', xl: 'xl', xs: 'xs' }}
        slidesToScroll={1}
        loop
        align='start'
        // nextControlIcon={<span>Next</span>}

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
            top: '-100px',
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
        className='w-[99%] m-auto'>
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
                classes={''}
                members={members}
                amount={amount}
              />
            </Carousel.Slide>
          ))}
      </Carousel>
    </div>
  );
}
