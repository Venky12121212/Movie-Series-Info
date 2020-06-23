import { combineReducers } from 'redux';
import searchReducers from './searchReducers';

export default combineReducers({
    movies : searchReducers
})