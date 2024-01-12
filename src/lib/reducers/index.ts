import authSlice from './authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import coursesSlice from './coursesSlice';
import eventsSlice from './eventsSlice';
import faqsSlice from './faqsSlice';

const rootReducer = combineReducers({
  course: coursesSlice,
  events: eventsSlice,
  auth: authSlice,
  faqs: faqsSlice
});

export default rootReducer;
