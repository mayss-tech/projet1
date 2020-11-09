import React from 'react';
import { withRouter } from 'react-router-dom';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.webp';
import img11 from './images/11.jpg';

import {BrowserRouter as Router} from 'react-router-dom';

const Header = (props) => {
    return(<Router><div>

<section2>
        <img  className="image11" src="https://expertphotography.com/wp-content/uploads/2018/07/dark-food-photography-still-life.jpg" alt="img11"></img>
    </section2>
    <section className="bar">
<p onClick={()=>props.history.push('/')} ><i className="fas fa-home"></i> <b>Home</b></p>

<p id="p2" ><i className="fas fa-user-alt"></i> <b>Se connecter</b><i className="fas fa-sort-down"></i></p>
    <div className="connection">
        <span >E-mail</span> <input className="span1"/><br/> 
        <span>Mot de passe</span> <input/><br/>
        <button className="btn1"><b>Connecter</b></button>
        </div>
<p  onClick={()=>props.history.push('/inscription')}  ><i className="fas fa-address-book"></i><b>Inscription</b></p>
<p onClick={()=>props.history.push('/contact')} ><i className="fas fa-comment-dots"></i><b>Contactez nous</b></p>
    </section> 
 
    
    <section3 className="sec3">
    <div>
        <img className="images" src={img1} alt="img1"/>
        <p> <b>Indiquez votre position</b><br/>Livraison jour et nuit<br/>à domicile et au bureau</p>
    </div>
    <div>
        <img className="images" src={img2} alt="img2"/>
        <p><b>Consultez et choisissez parmi</b> <br/> +100 restaurants à Sfax</p>
    </div>
    <div>
        <img className="images" src={img3} alt="img3"/>
        <p> <b>Payez à la livraison</b> <br/>Espèce, ticket resto, chèque</p>
    </div>    
    </section3>
    
    <section4 >
        <div className="sec4"  >
        <img className="images"   src={img4} alt="img4"></img>
        <h3> Vous êtes restaurateur ?</h3>
        <button className="btn3"  onClick={()=>props.history.push('/partenaire')}  ><b>Rejoignez-nous</b></button></div>
    </section4>
    
    </div></Router>);
}
export default withRouter (Header);