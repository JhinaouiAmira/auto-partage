import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {  useMatch, useNavigate } from "react-router-dom";
import { editProfil, getProfileVoyageur } from "../../redux/actions/voyageur";

function EditProfilVoy() {
    const match = useMatch("/voyageur/updateProfil/:id");
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const [newVoyageur, setNewVoyageur] = useState({
    
    });
    const profileToGet = useSelector(
      (state) => state.voyageurReducer.profileToGet
    );
    const handleChange = (e) => {
      setNewVoyageur({ ...newVoyageur, [e.target.name]: e.target.value });
    };
    useEffect(() => {
      dispatch(getProfileVoyageur(match.params.id));
    });
    const handleEdit = () => {
      dispatch(editProfil(match.params.id, newVoyageur));
      navigate(-1)
    };
    // console.log(match.params.id, "match.params.id");
  return (
    <div style={{marginTop:"30px",marginBottom:'50px'}}>
      <h3>Modifier votre profile </h3>
    <form >
      <label>Prénom :</label>
      <input
        type="text"
        name="prenom"
        placeholder={`${profileToGet.prenom}`}
        value={newVoyageur.prenom}
        onChange={handleChange}
      />
      <label>Nom :</label>
      <input
        type="text"
        name="name"
        placeholder={`${profileToGet.name}`}
        value={newVoyageur.name}
        onChange={handleChange}
      />
      <label>Genre :</label>
      <input
        type="text"
        name="genre"
        placeholder={`${profileToGet.genre}`}
        value={newVoyageur.genre}
        onChange={handleChange}
      />

      <label>E-mail :</label>
      <input
        type="text"
        name="email"
        placeholder={`${profileToGet.email}`}
        value={newVoyageur.email}
        onChange={handleChange}
      />
      <label>Téléphone mobile :</label>
      <input
        type="text"
        name="telephone"
        placeholder={`${profileToGet.telephone}`}
        value={newVoyageur.telephone}
        onChange={handleChange}
      />
      <label>Mot de passe :</label>
      <input
        type="text"
        name="password"
        placeholder={`${profileToGet.password}`}
        value={newVoyageur.password}
        onChange={handleChange}
      />
        <Button onClick={handleEdit}>Editer</Button>
    </form>
    </div>
  )
}

export default EditProfilVoy