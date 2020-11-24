import React from 'react';
import './Header.css';
import logo from '../images/logos.png';
import {BrowserRouter as Router ,withRouter} from 'react-router-dom';

const NavBar = (props) => {
    return ( <Router> 
    <div className="bar">
        <img  className="logo" src={logo} alt="logo" ></img>    
        <p id="Top" onClick={()=>props.history.push('/')} ><i className="fas fa-home"></i> <b>Home</b></p>
        
        {/*LOGIN  */}
        <li className="p2"> <p><i className="fas fa-user-alt"></i> <b>Se connecter</b><i className="fas fa-sort-down"></i></p>
        <ul className="connection">
            <li><p className="login">E-mail</p> <input className="span1"/><br/></li> 
            <li><p  >Mot de passe</p> <input className="span1"/><br/></li>
            <li><button className="btn1"><b>Connecter</b></button></li>
            <li><p onClick={()=>props.history.push('/inscription')}>Créer un compte</p></li>
        </ul>
        </li>

        {/* <p  onClick={()=>props.history.push('/inscription')}  ><i className="fas fa-address-book"></i><b>Inscription</b></p> */}
        <p onClick={()=>props.history.push('/login')} ><i className="fas fa-comment-dots"></i><b>Contactez-nous</b></p>
    </div> 
    </Router>);
}

export default withRouter (NavBar);