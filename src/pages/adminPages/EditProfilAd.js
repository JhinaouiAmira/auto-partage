import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editProfilAd } from "../../redux/actions/admin";

function EditProfilAd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newAdmin, setNewAdmin] = useState({});
  const match = useMatch("/admin/editProfil/:id");
  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editProfilAd(match.params.id, newAdmin));
    navigate(-1);
  };
  return (
    <div style={{ marginTop: "20px", marginBottom: "50px" }}>
      <h2>Modifier votre profil</h2>

      <form>
        <label>E-mail :</label>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={newAdmin.email}
          onChange={handleChange}
        />
        <label>mot de passe :</label>
        <input
          type="text"
          name="password"
          placeholder="enter password"
          value={newAdmin.password}
          onChange={handleChange}
        />
        <Button onClick={handleEdit}>Enregistrer</Button>
      </form>
    </div>
  );
}

export default EditProfilAd;
