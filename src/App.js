import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Inscri from './Components/inscription';
import Carousel from './Components/Home/Carousel.jsx';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Contact from './Components/contact';
import Partenaire from './Components/partenaire';
import RestoList from './Components/Restaurant/RestoList';
import NavBar from './Components/Header/NavBar';
import MenuList from './Components/Restaurant/MenuList.jsx';
export const App=(props)=>{
 
  const[list,setRestoList]=useState("")

  return (<Router>
    <div >
      
      <Route exact path="/" component={ ()=>  <Carousel/> } />
      <Route exact path="/" component={ (props)=>  <NavBar {...props}/> } />
      <Route exact path="/" component={ (props)=><Home {...props}/> }/>
      <Route exact path='/inscription' component={(props)=> <Inscri   {...props} />}/>
      <Route exact path='/contact' component={(props)=> <Contact   {...props} />}/>
      <Route exact path='/partenaire' component={(props)=> <Partenaire  {...props} />}/>
      <Route exact path='/restoList' component={()=>  <RestoList  list={list}/>}/>
      <Route path="/menuList/:id" component={(props)=><MenuList {...props} />} />
    </div>
    </Router> );
}

export default App;
