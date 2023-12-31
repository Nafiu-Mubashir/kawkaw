import { combineReducers } from '@reduxjs/toolkit';
import coursesSlice from './coursesSlice';

const rootReducer = combineReducers({
  course: coursesSlice
  // counter: counterReducer,
});

export default rootReducer;
