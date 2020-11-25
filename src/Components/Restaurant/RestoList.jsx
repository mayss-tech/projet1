import React, { useEffect} from 'react';
import {fetchRestaurantBeginAsync,searchRestaurant} from '../JS/actions/actionRestaurant';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const RestoList = (props) => {
    const dispatch = useDispatch();
    const restaurants= useSelector((state) => state.restoReducer.restaurants);
    const loading = useSelector((state) => state.restoReducer.loading);
    const error= useSelector((state) => state.restoReducer.error);
    useEffect(() => {
    dispatch(fetchRestaurantBeginAsync())
        
    }, []);
    const Search = ()=>{
        searchRestaurant()
    }
    return  loading ? ( 
        <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) :error? ( <h1 style={{marginTop:'15%', marginLeft:'40%'}}>404 Not Found </h1>
    ) : ( 
        <div className="part1">
        <div style={{marginTop:'18%'}}><input 
        type="text"
        placeholder="Chercher votre restaurant"
        onChange={(e)=>{Search(e.target.value)}}/></div>
        {       restaurants.map(el=><div className="restoList" key={el.id}>
                <img className="imgResto" src={el.image} alt="image"/>
                <div style={{display:"block"}} >
                <h4>{el.name}</h4>
                <p>{el.desc}</p></div>
                <button className="btn1" onClick={()=>props.history.push("/menu/menuList"+el.name)} >Voir menu</button>
            </div>)
        }
        </div>
    )};
export default withRouter (RestoList);