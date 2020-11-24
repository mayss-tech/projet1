import React, { useEffect} from 'react';
import {fetchRestaurantBeginAsync} from '../JS/actions/actionRestaurant';
import { useDispatch, useSelector } from 'react-redux';


const RestoList = () => {
    const dispatch = useDispatch();
    const restaurants= useSelector((state) => state.restoReducer.restaurants);
    const loading = useSelector((state) => state.restoReducer.loading);
    const error= useSelector((state) => state.restoReducer.error);
    useEffect(() => {
    dispatch(fetchRestaurantBeginAsync())
        
    }, []);
    return loading ? (
        <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) :error? ( <h1 style={{marginTop:'15%', marginLeft:'40%'}}>404 Not Found </h1>
    ) : (
        <div>
        {
            restaurants.map(el=><div key={el.id}>
                <img src={el.image} alt="image"/>
                <h4>{el.name}</h4>
                <p>{el.desc}</p>
            </div>)
        }
        </div>
    );
    // const [keyWords,setkeyWords]=useState("")
    // const Search=(x)=>{
    //     setkeyWords(x)
    // }
    // return ( <div>
        {/* <div><input 
        type="text"
        placeholder="Chercher votre restaurant"
        onChange={(e)=>Search(e.target.value)}/></div> */}
    {/* <div>{list.filter(el=>el.name.toUpperCase().includes(keyWords.toUpperCase())).map(el=><div className="restoList" key={el.id}>
    <img className="imgResto" src={el.url} alt="url"></img>
    <div style={{display:"block"}}>
    <h4>{el.name}</h4>
    <p>{el.description} </p></div>
    <p>{el.rate} </p>
    <button className="btn4" onClick={()=>props.history.push("/menuList/"+el.id)}>Voir menu</button>
    </div>) }</div> */}
{/*  
    </div> 
); */}
} 
export default RestoList;