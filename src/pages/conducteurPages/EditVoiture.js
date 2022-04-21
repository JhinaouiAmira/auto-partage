import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editVoiture } from "../../redux/actions/conducteur";
import { Button } from "react-bootstrap";

function EditVoiture() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newVoiture, setNewVoiture] = useState({});
  const match = useMatch("/conducteur/voiture/edit/:id");
  const handleChange = (e) => {
    setNewVoiture({ ...newVoiture, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editVoiture(match.params.id, newVoiture));
    navigate(-1);
  };
  console.log(match.params.id);

  return (
    <div>
      <h2> Modifier Voiture</h2>
      <form style={{ marginBottom: "50px", marginTop: "20px" }}>
        <label> Immatriculation:</label>
        <input
          type="text"
          name="immatriculation"
          placeholder="enter immatriculation"
          value={newVoiture.immatriculation}
          onChange={handleChange}
        />
        <label>Marque :</label>
        <input
          type="text"
          name="marque"
          placeholder="enter marque"
          value={newVoiture.marque}
          onChange={handleChange}
        />
        <label> Couleur :</label>
        <input
          type="text"
          name="couleur"
          placeholder="enter couleur"
          value={newVoiture.couleur}
          onChange={handleChange}
        />
        <label>Nombre de places :</label>
        <input
          type="number"
          name="nombre_places"
          placeholder="enter nombre de places"
          value={newVoiture.nombre_places}
          onChange={handleChange}
        />
        <Button onClick={handleEdit}>Enregistrer</Button>
      </form>
    </div>
  );
}

export default EditVoiture;
