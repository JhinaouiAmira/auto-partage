import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteVoiture } from "../../redux/actions/admin";
function CardVoiture({ voi }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Card border="primary" style={{ width: "18rem", marginTop: "50px" }}>
        <Card.Header>Immatriculation : {voi.immatriculation}</Card.Header>
        <Card.Body>
          <Card.Title>Marque : {voi.marque}</Card.Title>
          <Card.Text>Couleur : {voi.couleur}</Card.Text>
          <Card.Text>Nombre de places : {voi.nombre_places}</Card.Text>
        </Card.Body>
        <div>
          <Button onClick={() => dispatch(deleteVoiture(voi._id))}>
            Supprimer
          </Button>
          {/* <Button >
            Editer
          </Button> */}
        </div>
      </Card>
    </div>
  );
}

export default CardVoiture;
