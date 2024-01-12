import { Faqs } from '~/type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Faqs = {
  faqs: [
    {
      header: "Purchases & Refunds",
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Applying Natural Laws to Technology and Society',
    },
    {
      header: "Purchases & Refunds",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
      title: 'Education Autumn Tour',
    },
    {
      header: "Purchases & Refunds",
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Autumn Science Lectures',
    },
    {
      header: "Making Courses",
      content: 'Tech you how to build a complete Learning Management System with WordPress and LearnPress.',
      title: 'Build Education Website Using WordPress',
    },
    {
      header: "Making Courses",
      content: 'Tech you how to build a complete Learning Management System with WordPress and LearnPress.',
      title: 'Elegant Light Box Paper Cut Dioramas',
    },
    {
      header: "Making Courses",
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Managing Time for Study',
    },

  ]
};

const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {},
});

export default faqsSlice.reducer;
