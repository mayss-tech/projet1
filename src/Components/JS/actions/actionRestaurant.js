import axios from 'axios';
import { 
    FETCH_RESTAURANT_BEGIN,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE} from '../constants/action-typeRestaurant';

export const fetchRestaurantBeginAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_RESTAURANT_BEGIN,
    });
    try {
        const restaurants = await axios.get('/restaurant/restoList');
        dispatch({
            type:FETCH_RESTAURANT_SUCCESS ,
            payload: restaurants.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_RESTAURANT_FAILURE,
            payload: error.response,
        });
}
}







