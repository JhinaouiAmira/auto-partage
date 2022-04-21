import {
  editProfil,
  getProfileConducteur,
} from "../../redux/actions/conducteur";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useMatch, useNavigate } from "react-router-dom";
function EditProfile() {
  const match = useMatch("/conducteur/editProfil/:id");
  const profileToGet = useSelector(
    (state) => state.conducteurReducer.profileToGet
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newConducteur, setNewConducteur] = useState({});

  const handleChange = (e) => {
    setNewConducteur({ ...newConducteur, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getProfileConducteur(match.params.id));
  },[]);
  const handleEdit = () => {
    dispatch(editProfil(match.params.id, newConducteur));
    // dispatch(editProfil(newConducteur));
    navigate(-1);
  };
  // console.log(match.params.id, "match.params.id");
  return (
    <div>
      <h3>Modifier votre profile </h3>
      <form>
        <label>Prénom :</label>
        <input
          type="text"
          name="prenom"
          placeholder={`${profileToGet.prenom}`}
          value={newConducteur.prenom}
          onChange={handleChange}
        />
        <label>Nom :</label>
        <input
          type="text"
          name="name"
          placeholder={`${profileToGet.name}`}
          value={newConducteur.name}
          onChange={handleChange}
        />
        <label>Genre :</label>
        <input
          type="text"
          name="genre"
          placeholder={`${profileToGet.genre}`}
          value={newConducteur.genre}
          onChange={handleChange}
        />
        <label>E-mail :</label>
        <input
          type="text"
          name="email"
          placeholder={`${profileToGet.email}`}
          value={newConducteur.email}
          onChange={handleChange}
        />
        <label>Téléphone mobile :</label>
        <input
          type="text"
          name="telephone"
          placeholder={`${profileToGet.telephone}`}
          value={newConducteur.telephone}
          onChange={handleChange}
        />
        {/* <label>Mot de passe :</label>
        <input
          type="text"
          name="pasword"
          placeholder="entrer votre password"
          onChange={handleChange}
        /> */}
        <Button onClick={handleEdit}>Editer</Button>
      </form>
    </div>
  );
}

export default EditProfile;
