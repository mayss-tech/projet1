import React from 'react';
import { withRouter } from 'react-router-dom';
import img4 from '../images/4.webp';
import {BrowserRouter as Router} from 'react-router-dom';

const Home = (props) => {

    return(<Router><div>

    <div className="sec3">
    <div>
        <img className="images" src="https://previews.123rf.com/images/chekman/chekman1802/chekman180200017/94827433-ic%C3%B4ne-de-localisation-de-marqueur-dor%C3%A9-illustration-vectorielle-pointeur-de-carte-dor%C3%A9-isol%C3%A9-sur-fond-sombre-.jpg" alt="img1"/>
        <p> <b>Indiquez votre position</b><br/>Livraison jour et nuit<br/>à domicile et au bureau</p>
    </div>

    <div>
        <img className="images" src="https://i.pinimg.com/736x/21/6e/41/216e415824c35e1c7eab0a9a2485604b.jpg" alt="img2"/>
        <p><b>Consultez et choisissez parmi</b> <br/> +100 restaurants à Sfax</p>
    </div>

    <div>
        <img className="images" src="https://www.capitaine-banque.com/wp-content/uploads/2016/08/carte-bancaire-haut-de-gamme.jpg" alt="img3"/>
        <p> <b>Payez à la livraison</b> <br/>Espèce, ticket resto, chèque</p>
    </div> 

    </div>
    
    
    <div className="sec4"  >
        <img className="images"   src={img4} alt="img4"></img>
        <h3> Vous êtes restaurateur ?</h3>
        <button className="btn3"  onClick={()=>props.history.push('/partenaire')}><b>Rejoignez-nous</b></button>
    </div>

    </div></Router>);
}
export default withRouter (Home);