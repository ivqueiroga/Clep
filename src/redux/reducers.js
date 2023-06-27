import counter from './counterSlice';
import themes from './themesSlice';
import colorTheme from './darkModeSlice';
import dimensionsSlice from './dimensionsSlice';
import {combineReducers} from 'redux';

export default combineReducers({ themes, counter, colorTheme, dimensionsSlice });