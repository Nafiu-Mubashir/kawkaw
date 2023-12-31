import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CoursesCard } from '~/type';

const initialState: CoursesCard = {
  course: [
    {
      image: '/course-1.webp',
      name: 'Kenny White',
      title: 'Create an LMS Website with LearnPress',
      price: 'Free'
    },
    {
      image: '/course-2.webp',
      name: 'Kenny White',
      title: 'Introduction LearnPress – LMS plugin',
      price: 'Free'
    },
    {
      image: '/course-3.webp',
      name: 'Kenny White',
      title: 'How To Teach An Online Course',
      price: '$55.00'
    },
    {
      image: '/course-4.webp',
      name: 'Kenny White',
      title: 'How To Create An Online Course',
      price: '$30.00'
    },
    {
      image: '/course-5.webp',
      name: 'Kenny White',
      title: 'The Complete Online Teaching Masterclass',
      price: '$25.00'
    },
    {
      image: '/course-6.webp',
      name: 'Kenny White',
      title: 'Online Course Creation Secrets',
      price: '$55.00'
    },
  ]
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
