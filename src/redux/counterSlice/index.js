import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    defaultTime: 10,
    isTimerOn: false,
    setTime: '',
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
    }
  },
});

export const { timerControl, setCustomTime, resetToCustomTime } = counterSlice.actions

export const selectCounter = state => state.counter

export default counterSlice.reducer;
