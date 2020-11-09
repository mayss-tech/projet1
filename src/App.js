import React from 'react';
import './App.css';
import Header from './Components/header';
import Inscri from './Components/inscription';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Contact from './Components/contact';
import Partenaire from './Components/partenaire';
function App(props) {
  return (<Router>
    <div >
      <Route exact path="/" component={ (props)=><Header {...props}/>} />
      <Route exact path='/inscription' component={(props)=> <Inscri   {...props} />}/>
      <Route exact path='/contact' component={(props)=> <Contact   {...props} />}/>
      <Route exact path='/partenaire' component={(props)=> <Partenaire  {...props} />}/>
    </div>
    </Router> );
}

export default App;
