import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    defaultTime: 10,
    isRunning: false,
    nextPressed: false,
    setTime: 10,
    isCustomOn: false,
  },
  reducers: {
    timerControl: (state, {payload}) => {
      state.isRunning = payload;
      state.nextPressed = !state.nextPressed;
    },
    resetToCustomTime: (state) => {
      state.setTime = state.defaultTime;
    },
    addTime: (state) => {
      state.setTime >= 20 ? 20 : state.setTime ++;
    },
    subTime: (state) => {
      state.setTime <= 5 ? 5 : state.setTime--;
    },
  },
});

export const { timerControl, setCustomTime, resetToCustomTime, subTime, addTime} = counterSlice.actions

export const selectCounter = state => state.counter

export default counterSlice.reducer;
