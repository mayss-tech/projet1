import React, { useState } from 'react';
import Star from '../Restaurant/star.jsx';
import {BrowserRouter as Router ,withRouter} from 'react-router-dom';
const RestoList = (props) => {
    const[list,setRestoList]=useState([
        {id:1, 
        url:"https://shops.tn/wp-content/uploads/2019/07/FARM-RANCH-Pizza-Sfax.jpg",
        name:"Fram Ranch",
        description:"Ouvert De 11H30 A 22H30" ,
        rate:<Star/> },
        {id:2,
        url:"https://lagora-resto.tn/wp-content/uploads/2019/03/cropped-lagora-logo.png",
        name:"L'agora",
        description:"Ouvert De 11H A 23H45",
        rate: <Star/>}
    ])
    const [keyWords,setkeyWords]=useState("")
    const Search=(x)=>{
        setkeyWords(x)
    }
    return (<Router> <div>
        <input 
        type="text"
        placeholder="Chercher votre restaurant"
        onChange={(e)=>Search(e.target.value)}/>

    {list.filter(el=>el.name.toUpperCase().includes(keyWords.toUpperCase())).map(el=><div className="restoList" key={el.id}>
    <img className="imgResto" src={el.url} alt="url"></img>
    <div style={{display:"block"}}>
    <h4>{el.name}</h4>
    <p>{el.description} </p></div>
    <p>{el.rate} </p>
    <button className="btn4" onClick={()=>props.history.push("/menuList/"+el.id)}>Voir menu</button>
    </div>) }
    </div> </Router>);
}

export default withRouter(RestoList);