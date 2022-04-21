import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/conducteur";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingupCon() {
  const [newConducteur, setNewConducteur] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewConducteur({ ...newConducteur, [e.target.name]: e.target.value });
  };
  return (
  <div style={{display:"flex",flexWrap:"nowrap",justifyContent:"space-evenly",backgroundColor:"#f3f3f3"}}>
    <div style={{display:"block"}}>
    <img src="https://govoiturage.tn/carpooling/themes/carpooling/assets/img/conducteur.png" style={{height:"200px"}}/>
    <h3>Vous êtes un conducteur</h3>
    <ul><li>Créez votre compte</li></ul>
    <ul><li> Publiez votre trajet</li></ul>

    <ul><li>Vos passagers réservent en ligne</li></ul>

    <ul><li>Voyagez</li></ul>
    <ul><li>Recevez votre argent</li></ul>


    </div>
      <div >
    <div className="Container" id="container" >
        <form>  
          <h2>Inscrivez-vous</h2>
          <label>Prénom :</label>
          <input
            type="text"     
            name="prenom"
            placeholder="Enter votre prénom .."
            onChange={handleChange}
          />
          <label>Nom :</label>
          <input
            type="text"     
            name="name"
            placeholder="Enter votre nom .."
            onChange={handleChange}
          /> 
         
          <label>Genre :</label>
          <input
            type="text"     
            name="genre"
            placeholder="Enter votre genre .."
            onChange={handleChange}
          />
          <label>Téléphone mobile :</label>
          <input
            type="number"     
            name="telephone"
            placeholder="Enter votre téléphone mobile .."
            onChange={handleChange}
          />
          <label>E-mail :</label>
          <input
            type="email"
            name="email"
            placeholder="Entrer votre email .."
            onChange={handleChange}
          />
          
          <label>Mot de passe :</label>
          <input
            type="password"
            name="password"
            placeholder="Entrer votre mot de passe .."
            onChange={handleChange}
          />
          <Link to={"/conducteur/signin"}>
          <Button
            style={{ textAlign: "center", margin: "20px" }}
            onClick={() => dispatch(signup(newConducteur))}
          >
        S'inscrire
            
          </Button>
          </Link>
        </form>
        </div>
      </div>
      </div>
  );
}

export default SingupCon;

