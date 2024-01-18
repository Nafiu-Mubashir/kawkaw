import "react-multi-carousel/lib/styles.css";

import CoursesCard from '~/components/cards/courses-card/home-page'
import CustumizedCarousel from "~/components/carousel";
import MantineCarousel from "~/components/carousel/components/MantineCarousel";
import MoreButton from "~/components/more-button";
import React from 'react'
import { RootState } from "~/lib/store";
import { useSelector } from "react-redux";

const PopularCourses = () => {


  const carouselContent = useSelector((state: RootState) => state.course.course);
  // console.log(carouselContent);

  return (
    <div className='w-[95%] lg:w-[90%] m-auto mb-4 p- lg:p-8 relative'>
      <div className='mb-6'>
        <h3 className='font-bold text-[25px] lg:text-[50px]'>Popular Course</h3>
        <p className='text-[14px] lg:text-[20px] text-gray-500'>Limitless Learning, more possible</p>
      </div>
      <CustumizedCarousel classes={'h-[85vh] md:h-[85vh] lg:h-[70vh]'}>
        {
          carouselContent.slice(0, 6).map(({ authur, title, price, image, members, amount }, ind) => (
            <CoursesCard authur={authur} title={title} price={price} image={image} key={ind} classes={""} members={members} amount={amount} />
          ))
        }
      </CustumizedCarousel>
      <MoreButton classes="mt-10 lg:mt-5" to="/courses" label="View More" />

{/* <MantineCarousel /> */}
    </div>
  )
}

export default PopularCourses