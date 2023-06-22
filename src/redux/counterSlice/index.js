import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    defaultTime: 10,
    isTimerOn: false,
    setTime: Number,
    isCustomOn: false,
  },
  reducers: {
    timerControl: (state, {payload}) => {
      state.isTimerOn = payload;
    },
    setCustomTime: (state, {payload}) => {
      state.setTime = payload
      state.isCustomOn = true;
    },
    resetToCustomTime: (state, {payload}) => {
      state.isCustomOn = false;
    },
    addTime: (state, {payload}) => {
      if (state.isCustomOn) {
        state.setTime >= 50 ? 50 : state.setTime++;
      } else {
        state.isCustomOn = true;
        state.setTime = state.defaultTime + 1;
      }
    },
    subTime: (state, {payload}) => {
      if (state.isCustomOn) {
        state.setTime <= 0 ? 0 : state.setTime--;
      } else {
        state.isCustomOn = true;
        state.setTime = state.defaultTime -1;
      }
    }
  },
});

export const { timerControl, setCustomTime, resetToCustomTime, subTime, addTime} = counterSlice.actions

export const selectCounter = state => state.counter

export default counterSlice.reducer;
