import React, { useEffect, useState} from 'react';
import {fetchMenuAsync} from '../JS/actions/actionMenu';
import { useDispatch, useSelector } from 'react-redux';


const MenuList= (props) => {
    const [menuList, setMenuList]=useState([])
    const menus= useSelector((state) => state.menuReducer.menus);
    const loading = useSelector((state) => state.menuReducer.loading);
    const error= useSelector((state) => state.menuReducer.error);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props.match.params.restoName,'props.match.params.restoName')
        setMenuList(menus.filter(el=>el.restoName===props.match.params.restoName))  
        dispatch(fetchMenuAsync())
            
        }, [menus]);
    return loading ? (
        <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) :error? ( <h1 style={{marginTop:'15%', marginLeft:'40%'}}> 404 Not Found </h1>
    ) : ( 
        <div className="part1">
        {       menuList.map(el=><div className="restoList" key={el.id}>
                <img className="imgResto"  src={el.img} alt="image"/>
                <div style={{display:"block"}} >
                <p>{el.restoName}</p>
                <h4>{el. menuName}</h4>
                <p>{el.desc}</p>
                <h5>{el.price} </h5></div>
                <button className="btn1">Ajouter au pannier</button>
            </div>)
        }
        </div>


    )

};
export default MenuList;