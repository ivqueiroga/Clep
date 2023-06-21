import counter from './counterSlice';
import themes from './themesSlice';
import {combineReducers} from 'redux';

export default combineReducers({ themes, counter });