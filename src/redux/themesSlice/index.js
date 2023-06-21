import { createSlice } from '@reduxjs/toolkit'

let id = 0;

export const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    defaultThemes: [],
    isDefaultSet: true,
    customThemes: [],
    isCustomSet: false,
  },
  reducers: {
    useCustomThemes: (state, {payload}) => {

    },
    useDefaultThemes: (state, {payload}) => {

    },
    addCustomTeme: (state, {payload}) => {

    },
    editCustomTeme: (state, {payload}) => {

    },
    deleteCustomTeme: (state, {payload}) => {

    },
  },
});

export const { useCustomThemes, useDefaultThemes, addCustomTeme, editCustomTeme, deleteCustomTeme } = themesSlice.actions

export const selectTheme = state => state.curtheme

export default themesSlice.reducer;
