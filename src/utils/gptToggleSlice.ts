import { createSlice } from '@reduxjs/toolkit';
const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { value: 0},
  reducers: {
    toggleUp: (state) => {
        console.log(state.value)
        state.value = state.value ^ 1;
        console.log(state.value)
        return;
    },
    toogleInit: (state) => {
      state.value = 0;
      return;
  },
  },
});
export const {toggleUp, toogleInit} = toggleSlice.actions;
export default toggleSlice.reducer;