import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/actions/voyageur";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";


function SigninVoy() {
  const [newVoyageur, setNewVoyageur] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewVoyageur({ ...newVoyageur, [e.target.name]: e.target.value });
  };
  return ( 
    <div style={{display:"flex",flexWrap:'nowrap',justifyContent:'space-evenly'}}>
      <h3 style={{marginTop:"200px"}}>Bienvenue sur <span style={{color:"green"}}> Auto-Partage! </span></h3>
    <div className="Container" id="container">
      <form>
        <h2>Connectez-vous</h2>
        <label>E-mail :</label>
        <input
          type="email"
          name="email"
          placeholder="Entrer votre email .."
          onChange={handleChange}
        />
        <label>Mot de passe:</label>
        <input
          type="password"
          name="password"
          placeholder="Entrer votre mot de passe .."
          onChange={handleChange}
        />
        <Link to={"/voyageur/profile"}>
        <Button
          style={{ textAlign: "center", margin: "20px" }}
          onClick={() => dispatch(signin(newVoyageur))}
        >
      S'identifier
        </Button>
        </Link>
      </form>
    </div>
    </div>
  );
}

export default SigninVoy;
