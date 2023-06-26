import { createSlice } from '@reduxjs/toolkit'

const data = [
  '#313A40',
  '#b88a32',
  '#A66C26',
  '#A64F03',
  '#0D0D0D',
  '#ffffff',
  '#000000',
];

export const darkModeSlice = createSlice({
  name: 'colorTheme',
  initialState: {
    colors: data,
    isDarkModeOn: true,
  },
  reducers: {
    colorManage: (state, {payload}) => {
      if (state.isDarkModeOn) {
        state.colors = data;
      } else {
        console.log('lightMode');
      }
    },
  },
});

export const { colorManage } = darkModeSlice.actions

export const selectColor = state => state.colors

export default darkModeSlice.reducer;
