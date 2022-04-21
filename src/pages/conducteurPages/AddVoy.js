import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { addVoyage } from "../../redux/actions/conducteur";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function AddVoy() {
  const dispatch = useDispatch();
  const isAuthConducteur=useSelector(state=>state.conducteurReducer.isAuthConducteur)
  const [newVoyage, setNewVoyage] = useState({
    ville_départ: "",
    ville_arrivée: "",
    date: "",
    prix: "",
    idc: localStorage.getItem('id_c'),
  });
  const handleChange = (e) => {
    setNewVoyage({ ...newVoyage, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addVoyage(newVoyage));
  };
  return (
    
    <div style={{ paddingRight: "300px", paddingLeft: "250px" }}>
      <h2>Ajouter Voyage</h2>

      <form>
        <div>
        <label>Ville de départ</label>
        <input
          type="text"
          name="ville_départ"
          placeholder="entrer ville de départ"
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Ville d'arrivée</label>
        <input
          type="text"
          name="ville_arrivée"
          placeholder="Entrer ville d'arrivée"
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Date</label>
        <input
          type="text"
          name="date"
          placeholder="DD/MM/YYYY"
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Prix</label>
        <input
          type="text"
          name="prix"
          placeholder="Entrer le prix"
          onChange={handleChange}
        />
        </div>
        <div>
        <input type="text" name="idc" hidden onChange={handleChange} />
        </div>
        <div>
        <Link to={"/conducteur/voyage/all/"}>
          <Button onClick={handleAdd}>Envoyer</Button>
        </Link>
        </div>
        </form>
      

       </div>
  );
}

export default AddVoy;
