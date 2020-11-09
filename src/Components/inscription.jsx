import React from 'react';
const Inscri = () => {
    return ( <div>
<p className="p1">Prenez quelques minutes pour vous inscrire sur "Livraison HamHama" et passez ensuite vos commandes</p>
    <div className="block1">
        <h4>Informations personnelles</h4>
        <span>Nom et Prènom</span> <input/><br/>
        <span>Numéro de téléphone</span> <input/><br/>
         <span>Adresse E-mail</span> <input/><br/> 
        <span>Mot de passe</span> <input/><br/>
        <h4>Adresse principale</h4>
        <span>Adresse</span> <input/><br/>
        <span>Code postale</span> <input/><br/>
        <span>Type</span> <select><br/>
            <option>Maison</option>
            <option>Appartement</option>
            <option>Bureau</option>
        </select><br/> 
        <button className="btn2">Créer mon compte</button>
    </div>
    </div> );
}
export default Inscri;