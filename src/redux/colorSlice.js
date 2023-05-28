import { createSlice } from '@reduxjs/toolkit';
//import Cookie from "js-cookie"

// Part1: Define Slice (including reducers and actions)
const lightMode = true;
const initialState = { lightMode };
const colorSlice = createSlice({
  name: 'color',
  initialState,
});

// export state to global
export const selectLightMode = (state) => state.color.lightMode;


// export reducer to global
export default colorSlice.reducer;
