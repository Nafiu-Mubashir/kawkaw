import { News } from '~/type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: News = {
  news: [
    {
      title: "Purchases & Refunds",
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      date: 'Applying Natural Laws to Technology and Society',
      author: '',
      image: '/news/news1.webp',
    },
    {
      title: "Purchases & Refunds",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
      date: 'Education Autumn Tour',
      author: '',
      image: '/news/news2.webp',
    },
    {
      title: "Purchases & Refunds",
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      date: 'Autumn Science Lectures',
      author: '',
      image: '/news/news3.webp',
    },
    {
      title: "Making Courses",
      content: 'Tech you how to build a complete Learning Management System with WordPress and LearnPress.',
      date: 'Build Education Website Using WordPress',
      author: '',
      image: '/news/news4.webp',
    },
    {
      title: "Making Courses",
      content: 'Tech you how to build a complete Learning Management System with WordPress and LearnPress.',
      date: 'Elegant Light Box Paper Cut Dioramas',
      author: '',
      image: '/news/news5.webp',
    },
    {
      title: "Making Courses",
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      date: 'Managing Time for Study',
      author: '',
      image: '/news/news4.webp',
    },

  ]
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
