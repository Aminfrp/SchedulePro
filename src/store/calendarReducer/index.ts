import { createSlice } from '@reduxjs/toolkit';
import calendarStates from './states';
import actions from "./actions";

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: calendarStates,
  reducers: actions,
});

export const { setCalendarType,addNewEvent } = calendarSlice.actions;
export default calendarSlice.reducer;