import counter from './counterSlice';
import themes from './themesSlice';
import colorTheme from './darkModeSlice';
import {combineReducers} from 'redux';

export default combineReducers({ themes, counter, colorTheme });