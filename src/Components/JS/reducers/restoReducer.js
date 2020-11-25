import {FETCH_RESTAURANT_BEGIN,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE, 

    SEARCH_RESTAURANT
    } from '../constants/action-typeRestaurant';

const initialState = {
    text:'',
    restaurants: [],
    loading: false,
    error: null
};
const restoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_RESTAURANT_BEGIN:
        return {
            ...state,
            loading:true
        };
    case FETCH_RESTAURANT_SUCCESS:
        return {
            ...state,
            restaurants:payload,
            loading:false,
        };
    case FETCH_RESTAURANT_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        };
    case SEARCH_RESTAURANT:
        return {
            ...state,
            loading:false,
            text:payload
        }   
        default:
        return state;
    }
};
export default restoReducer;
