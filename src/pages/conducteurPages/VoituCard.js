import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteVoiture } from "../../redux/actions/admin";
// import { deleteVoiture } from "../../redux/actions/conducteur";

function VoituCard({ voiture }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Card border="primary" style={{ width: "18rem", marginTop: "50px" }}>
        <Card.Header>Immatriculation : {voiture.immatriculation}</Card.Header>
        <Card.Body>
          <Card.Title>Marque : {voiture.marque}</Card.Title>
          <Card.Text>Couleur : {voiture.couleur}</Card.Text>
          <Card.Text>Nombre de places : {voiture.nombre_places}</Card.Text>
        </Card.Body>
        <div>
          <Button onClick={() => dispatch(deleteVoiture(voiture._id))}>
            Supprimer
          </Button>
          <Button
            onClick={() => navigate(`/conducteur/voiture/edit/${voiture._id}`)}
          >
            Editer
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default VoituCard;
