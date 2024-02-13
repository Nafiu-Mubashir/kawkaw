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
     
    </div>
  );
}
