import axios from 'axios';
import { 
    FETCH_MENU_BEGIN,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    } from '../constants/action-typeMenu';

export const fetchMenuAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_MENU_BEGIN,
    });
    try {
        const menus = await axios.get('/menu/menuList');
        dispatch({
            type:FETCH_MENU_SUCCESS ,
            payload: menus.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_MENU_FAILURE,
            payload: error.response.data,
        });
}};