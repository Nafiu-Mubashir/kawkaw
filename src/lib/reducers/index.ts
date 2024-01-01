import { combineReducers } from '@reduxjs/toolkit';
import coursesSlice from './coursesSlice';
import eventsSlice from './eventsSlice';

const rootReducer = combineReducers({
  course: coursesSlice,
  events: eventsSlice
});

export default rootReducer;
