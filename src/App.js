import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Carousel from './Components/Home/Carousel.jsx';
import Contact from './Components/contact';
import Partenaire from './Components/partenaire/partenaire';
import RestoList from './Components/Restaurant/RestoList';
import NavBar from './Components/Header/NavBar';
import Register from './Components/Inscription/inscription';


export const App=()=>{
  return (<BrowserRouter>
      <Route exact path="/" component={ ()=>  <Carousel/> } />
      <NavBar/>
      <Route exact path="/" component={ (props)=><Home {...props}/> }/>
      <Route exact path='/inscription' component={(props)=> <Register  {...props} />}/>
      <Route exact path='/contact' component={(props)=> <Contact   {...props} />}/>
      <Route exact path='/partenaire' component={(props)=> <Partenaire  {...props} />}/>
      <Route exact path='/restaurant/restoList' component={()=>  <RestoList />}/>
    </BrowserRouter> );
}
export default App;
