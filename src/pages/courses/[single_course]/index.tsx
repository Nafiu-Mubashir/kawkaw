import {
  Archive,
  Facebook,
  HambergerMenu,
  Instagram,
  Messages2,
  Profile,
  Star1,
  Xrp,
} from 'iconsax-react';

import { Carousel } from '@mantine/carousel';
import CoursesCard from '~/components/cards/courses-card/home-page';
import Curriculum from './components/curriculum';
import Image from 'next/image';
import Instructor from './components/instructor';
import LatestCourses from '../components';
import Link from 'next/link';
import Overview from './components/overview';
import React from 'react';
import Review from './components/review';
import { RootState } from '~/lib/store';
import { SinglePageLayout } from '~/layouts/single-page-layout';
import { Tabs } from '@mantine/core';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const SingleCourse = () => {
  const router = useRouter();
  const { single_course } = router.query;
  const courses = useSelector((state: RootState) => state.course.course);
  const single = courses.find((val) => val.title === single_course);

  const categories: string[] = courses.reduce(
    (accumulator: string[], course) => {
      if (!accumulator.includes(course.category)) {
        accumulator.push(course.category);
      }
      return accumulator;
    },
    []
  );

  return (
    <div className='grid grid-row md:grid-cols-4 lg:grid-cols-4 gap-3 mt-5 w-full md:w-[95%] lg:w-[80%] m-auto p- overflow-hidden p-5'>
      <div className='col-span-3 md:cols-2'>
        <div>
          <h1 className='text-[22px] lg:text-[28px] mb-3 font-bold'>
            {single?.title}
          </h1>
          <div className='flex flex-col  lg:flex-row justify-between mb-6'>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2'>
                <Image
                  width={200}
                  height={200}
                  src='/instructor.webp'
                  alt=''
                  className='rounded-full w-[45px] border bg-white h-[45px]'
                />
                <div>
                  <p className='text-[12px] font-bold'>Teacher</p>
                  <p className='text-[15px]'>{single?.authur}</p>
                </div>
              </div>
              <div className='p-2 border-l hidden md:block lg:block'>
                <p className='text-[12px] font-bold'>Categories</p>
                <p className='text-[15px]'>{single?.category}</p>
              </div>
              <div className='p-2 md:border-l lg:border-l'>
                <p className='text-[12px] font-bold'>Review</p>
                <div className='flex'>
                  <Star1 size='20' color='#FFB606' />
                  <Star1 size='20' color='#FFB606' />
                  <Star1 size='20' color='#FFB606' />
                  <Star1 size='20' color='#FFB606' />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2 md:justify-end'>
              <p
                className={`${
                  single?.price === 'Free' ? 'text-green-600' : 'text-red-600'
                } font-bold text-[30px]`}>
                {single?.price === 'Paid'
                  ? `$${single?.amount}.00`
                  : single?.price}
              </p>
              <button className='uppercase bg-mine px-4 h-[40px]'>
                Start Now
              </button>
            </div>
          </div>
          <div>
            <Image
              src={single!?.image}
              height={490}
              width={1000}
              alt=''
              className='aspect-auto'
            />
          </div>
          <div className='border mb-3 mt-4'>
            <Tabs
              variant='outline'
              defaultValue='overview'
              classNames={{
                tab: '!rounded-none focus:border-t-mine focus:border-t-2',
                tabSection: '',
              }}>
              <Tabs.List grow justify='space-between'>
                <Tabs.Tab
                  value='overview'
                  leftSection={
                    <Archive size='16' color='black' variant='Bold' />
                  }
                  className=''>
                  Overview
                </Tabs.Tab>
                <Tabs.Tab
                  value='curriculum'
                  leftSection={<HambergerMenu size='16' color='black' />}
                  className=''>
                  Curriculum
                </Tabs.Tab>
                <Tabs.Tab
                  value='instructor'
                  leftSection={
                    <Profile size='16' color='black' variant='Bold' />
                  }
                  className=''>
                  Instructor
                </Tabs.Tab>
                <Tabs.Tab
                  value='reviews'
                  leftSection={
                    <Messages2 size='16' color='black' variant='Bold' />
                  }
                  className=''>
                  Reviews
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value='overview'>
                <Overview overview={single?.overview} />
              </Tabs.Panel>

              <Tabs.Panel value='curriculum'>
                <Curriculum />
              </Tabs.Panel>

              <Tabs.Panel value='instructor'>
                <Instructor
                  author={single?.authur}
                  authorDetails={single?.authorDetails}
                />
              </Tabs.Panel>

              <Tabs.Panel value='reviews'>
                <Review />
              </Tabs.Panel>
            </Tabs>
          </div>
          <div className='flex gap-3'>
            <p>Share: </p>
            <Facebook size='24' color='gray' />
            <Xrp size='24' color='gray' />
            <Instagram size='24' color='gray' />
          </div>

          <div className='mt-5'>
            <h1 className='mb-3 font-bold lg:text-[24px] after:block after:w-10 after:bg-black after:h-[1px]'>
              YOU MAY LIKE
            </h1>
            <Carousel
              withIndicators
              height={450}
              slideSize={{ base: '100%', sm: '50%', md: '20%' }}
              slideGap={{
                base: 0,
                sm: 'sm',
                lg: 'lg',
                md: 'md',
                xl: 'xl',
                xs: 'xs',
              }}
              slidesToScroll={3}
              withControls={false}
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
                indicator: '',
              }}
              className='w-[98%] m-auto'>
              {courses
                .slice(0, 6)
                .map(
                  ({ authur, title, price, image, members, amount }, ind) => (
                    <Carousel.Slide className='h-full' key={ind}>
                      <CoursesCard
                        authur={authur}
                        title={title}
                        price={price}
                        image={image}
                        key={ind}
                        classes={'md:w-[240px] lg:w-[260px]'}
                        members={members}
                        amount={amount}
                      />
                    </Carousel.Slide>
                  )
                )}
            </Carousel>
          </div>
        </div>
      </div>
      <div className='col-span-3 md:col-span-1'>
        <div className='border-l'>
          <div className='mb-3'>
            <h3 className='border-l-4 border-l-mine font-bold p-2 text-[20px]'>
              All Courses
            </h3>
            <div className='p-2'>
              {categories.map((category) => (
                <div key={category} className='flex justify-between'>
                  <Link
                    className='font-normal capitalize p-1 hover:text-mine'
                    href={'#'}>
                    {category}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <LatestCourses />
      </div>
    </div>
  );
};

export default SingleCourse;

SingleCourse.getLayout = function (page: React.ReactElement) {
  const event = '/single-course.webp';
  return <SinglePageLayout image={event}>{page}</SinglePageLayout>;
};
