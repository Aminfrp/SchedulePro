import { createSlice } from '@reduxjs/toolkit';
import countryStates from './states';
import actions from "./actions";

const countrySlice = createSlice({
  name: 'country',
  initialState: countryStates,
  reducers: actions,
});

export const { setFlags } = countrySlice.actions;
export default countrySlice.reducer;