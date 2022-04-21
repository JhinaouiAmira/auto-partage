import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/voyageur";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignupVoy() {
  const [newVoyageur, setNewVoyageur] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewVoyageur({ ...newVoyageur, [e.target.name]: e.target.value });
  };
  return (
    <div style={{display:"flex",flexWrap:"nowrap",justifyContent:"space-evenly",backgroundColor:"#f3f3f3"}}>
    <div style={{display:"block"}}>
    <img src="http://govoiturage.tn/carpooling/themes/carpooling/assets/img/passager.png" style={{height:"200px"}}/>
    <h3>Vous êtes un voyageur</h3>
    <ul><li>Créez votre compte</li></ul>
    <ul><li> Recherchez votre trajet</li></ul>

    <ul><li>Réservez votre trajet</li></ul>

    <ul><li>Voyagez</li></ul>
</div>
      <div className="Container" id="container">
        <form>
          <h2>S'inscrire</h2>
          <label>Prénom :</label>
          <input
            type="text"
            name="prenom"
            placeholder="Entrer votre prénom .."
            onChange={handleChange}
          />
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            placeholder="Entrer votre Nom .."
            onChange={handleChange}
          />
          {/* <label>Genre : </label>
        <Form.Select   onChange={handleChange} name="genre" aria-label="Default select example">
<option value="1">Homme</option>
<option value="2">Femme</option>
</Form.Select> */}
          <label>Genre :</label>
          <input
            type="text"
            name="genre"
            placeholder="Enter votre genre .."
            onChange={handleChange}
          />

          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="Entrer votre Email .."
            onChange={handleChange}
          />
          <label>Téléphone mobile :</label>
          <input
            type="number"
            name="telephone"
            placeholder="Entrer votre téléphone mobile .."
            onChange={handleChange}
          />
          <label>Mot de passe :</label>
          <input
            type="password"
            name="password"
            placeholder="Entrer votre mot de passe .."
            onChange={handleChange}
          />

          <Link to={"/voyageur/signin"}>
            <Button
              style={{ textAlign: "center", margin: "20px" }}
              onClick={() => dispatch(signup(newVoyageur))}
            >
              Enregistrer
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupVoy;
