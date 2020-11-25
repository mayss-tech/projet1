import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restoReducer from './restoReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    userReducer, restoReducer, menuReducer 
});
