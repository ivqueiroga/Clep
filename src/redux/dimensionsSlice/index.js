import { createSlice } from '@reduxjs/toolkit'

export const dimensionsSlice = createSlice({
  name: 'dimensions',
  initialState: {
    width: Number,
    heigth: Number,
  },
  reducers: {
    setDimensions: (state, {payload}) => {
      state.width = payload.width;
      state.heigth = payload.heigth;
      }
    },
  },
);

export const { setDimensions } = dimensionsSlice.actions

export const selectDimensions = state => state.dimensions

export default dimensionsSlice.reducer;
