import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Events } from '~/type';

const initialState: Events = {
  events: [
    {
      image: '/event1.webp',
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Applying Natural Laws to Technology and Society',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "30",
        month: "September"
      },
      location: "NewYork, USA",
      category: "happening",
      home: "home"
    },
    {
      image: '/event3.jpg',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
      title: 'Education Autumn Tour',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "15",
        month: "August"
      },
      location: "Berlin, Germany",
      category: "happening"
    },
    {
      image: '/event4.jpg',
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Autumn Science Lectures',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "15",
        month: "October"
      },
      location: "Venice, Italy",
      category: "happening"
    },
    {
      image: '/event5.jpg',
      content: 'Tech you how to build a complete Learning Management System with WordPress and LearnPress.',
      title: 'Build Education Website Using WordPress',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "30",
        month: "October"
      },
      location: "Chicago, US",
      category: "happening"
    },
    {
      image: '/event2.webp',
      content: 'Tech you how to build a complete Learning Management System with WordPress and LearnPress.',
      title: 'Elegant Light Box Paper Cut Dioramas',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "25",
        month: "December"
      },
      location: "Vancouver, Canada",
      category: "upcoming"
    },
    {
      image: '/event2.webp',
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Managing Time for Study',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "25",
        month: "October"
      },
      location: "Paris, French",
      category: "expired",
      home: "home"
    },
    {
      image: '/event6.jpg',
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Autumn Science Lectures',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "30",
        month: "September"
      },
      location: "London, UK",
      category: "expired"
    },
    {
      image: '/event7.jpg',
      content: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat',
      title: 'Build Education Website Using WordPress',
      time: {
        from: '8:00 Am',
        to: '5:00 Pm'
      },
      date: {
        day: "23",
        month: "December"
      },
      location: "Birmingham, UK",
      category: "expired"
    },
    
  ]
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;
