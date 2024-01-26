import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import React from 'react'
import { RootState } from '~/lib/store';
import { useSelector } from 'react-redux';

const LatestNews = () => {
  const NEWS = useSelector((state: RootState) => state.news.news);
  
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/courses/course-17.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='h-[573px]'
    >

      <div className='w-[95%] lg:w-[90%] m-auto mb-4 p- lg:p-8 relative'>
        <div className='mb-6'>
          <h3 className='font-bold text-[25px] lg:text-[30px] text-white'>Latest News</h3>
          <p className='text-[14px] text-white'>Limitless Learning, more possible</p>
        </div>
        {/* <CustumizedCarousel classes={'h-[40vh] md:h-[85vh] lg:h-[50vh]'}>
          {
            NEWS.map(({author, image,title}, id) => (
              <div className='w-[122.5px] lg:w-[350px]' key={id}>
                <div style={{ backgroundImage: `url(${image})` }} className='w-[122.5px] lg:w-[350px] h-[70.65px] lg:h-[280px] bg-cover bg-no-repeat bg-center'>

                </div>
                <div className='bg-mine w-[122.5px] lg:w-[200px] h-[50px] lg:h-[30px] lg:m-auto text-center mt-[-20px]'>
                  <p>Hinata Hyuga - 20/08/2022 </p>
                </div>
                <p className='text-white text-center'>Admin earns scholarship </p>
              </div>
            ))
          }

        </CustumizedCarousel> */}
        <Carousel
          // slideSize="70%" height={200} slideGap="md"
          withIndicators
          height={550}
          slideSize={{ base: '100%', sm: '50%', md: '100%' }}
          slideGap={{ base: 0, sm: 'sm', lg: 'lg', md: 'md', xl: 'xl', xs: 'xs' }}
          slidesToScroll={1}
          loop
          align="start"
          styles={{
            container: {

            },
            control: {
              borderRadius: 'none',
              height: '50px',
              width: '50px',
            },
            controls: {
              border: '5px sloid black',
              position: 'absolute',
              top: '-100px',
              left: 'auto',
              gap: '10px',
            },
            indicator: {
              borderRadius: '50px',
              width: '10px',
              height: '10px',
              backgroundColor: '#FFB606'
            }
          }}
          classNames={{}}
          className='w-[99%] h-[50vh] m-auto'
        >
          {
            NEWS.slice(0, 6).map(({ author, image, title }, id) => (
              <div className='w-full md:w-[350px] lg:w-[300px] h-[500px] overflow-hidden' key={id}>
                <div>
                  <Image src={image} alt={''} width={360} height={208} />
                  <div className='bg-mine w-[122.5px] lg:w-[200px] h-[50px] lg:h-[30px] lg:m-auto text-center mt-[-20px]'>
                    <p>Hinata Hyuga - 20/08/2022 </p>
                  </div>
                  <p className='text-white text-center'>Admin earns scholarship </p>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default LatestNews