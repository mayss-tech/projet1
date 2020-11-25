import { 
    FETCH_MENU_BEGIN,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    } from '../constants/action-typeMenu';

const initialState = {
    menus: [],
    loading: false,
    error: null
};
const menuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_MENU_BEGIN:
        return {
            ...state,
            loading:true
        };
    case FETCH_MENU_SUCCESS:
        return {
            ...state,
            menus:payload,
            loading:false,
        };
    case FETCH_MENU_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        };   
        default:
        return state;
    }
};
export default menuReducer;