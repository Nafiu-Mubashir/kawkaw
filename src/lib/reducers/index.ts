import authSlice from './authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import coursesSlice from './coursesSlice';
import eventsSlice from './eventsSlice';

const rootReducer = combineReducers({
  course: coursesSlice,
  events: eventsSlice,
  auth: authSlice,
});

export default rootReducer;
