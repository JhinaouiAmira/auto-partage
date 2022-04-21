import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { editVoyage } from '../../redux/actions/conducteur';
import {Button} from "react-bootstrap"
function EditVoyage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newVoyage, setNewVoyage] = useState({
    
  });
  const match = useMatch("/conducteur/voyage/edit/:id");
  const handleChange = (e) => {
    setNewVoyage({ ...newVoyage, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editVoyage(match.params.id, newVoyage));
    navigate(-1);
  };
  console.log(match.params.id)
  return (
    <div >
      <h2 style={{marginBottom:'30px'}}>Modifier Voyage</h2>
    <form>
    <label> Ville de départ:</label>
    <input type="text" name="ville_départ" placeholder="enter Ville de départ" value={newVoyage.ville_départ} onChange={handleChange} />
    <label>Ville d'arrivée :</label>
    <input type="text" name="ville_arrivée" placeholder="enter Ville d'arrivée " value={newVoyage.ville_arrivée} onChange={handleChange}/>
    <label> Date :</label>
    <input type="text" name="date" placeholder="enter  Date" value={newVoyage.date} onChange={handleChange} />
    <label>Prix :</label>
    <input type="text" name="prix" placeholder="enter Prix" value={newVoyage.prix} onChange={handleChange}/>
    <Button onClick={handleEdit}>Enregistrer</Button>
  </form>
  </div>
  )
}

export default EditVoyage