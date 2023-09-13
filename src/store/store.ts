import { combineReducers } from '@reduxjs/toolkit';
import countryReducer from './country';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  countries: countryReducer,
});

export default rootReducer;