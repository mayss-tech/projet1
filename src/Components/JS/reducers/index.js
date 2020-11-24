import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restoReducer from './restoReducer';

export default combineReducers({
    userReducer, restoReducer
});
