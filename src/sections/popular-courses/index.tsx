import "react-multi-carousel/lib/styles.css";

import CoursesCard from '~/components/courses-card'
import CustumizedCarousel from "~/components/carousel";
import React from 'react'
import { RootState } from "~/lib/store";
import ViewMoreButton from "~/components/view-more";
import { useSelector } from "react-redux";

const PopularCourses = () => {


  const carouselContent = useSelector((state: RootState) => state.course.course);
  console.log(carouselContent);
  
  return (
    <div className='w-[95%] lg:w-[80%] m-auto mb-4 p- lg:p-8 relative'>
      <div className='mb-6'>
        <h3 className='font-bold text-[25px] lg:text-[50px]'>Popular Course</h3>
        <p className='text-[14px] lg:text-[20px] text-gray-500'>Limitless Learning, more possible</p>
      </div>
      <CustumizedCarousel classes={'h-[85vh] md:h-[85vh] lg:h-[65vh]'}>
        {
          carouselContent.map(({ name, title, price, image, }, ind) => (
            <CoursesCard name={name} title={title} price={price} image={image} key={ind} />
          ))
        }
      </CustumizedCarousel>
      <ViewMoreButton classes="mt-10 lg:mt-5" to="/courses" />

    </div>
  )
}

export default PopularCourses