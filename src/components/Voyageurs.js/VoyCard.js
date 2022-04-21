import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { deleteVoyageur } from "../../redux/actions/admin";

function VoyCard({ voyageur }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card border="primary" style={{ width: "18rem", marginTop: "50px" }}>
        <Card.Img
          style={{ height: "160px" }}
          variant="top"
          src="https://us.123rf.com/450wm/neyro2008/neyro20081409/neyro2008140900061/31493998-beaut%C3%A9-avec-voyage-trolley-sur-roues.jpg?ver=6"
        />
        <Card.Header>
          <h3>Prénom : {voyageur.prenom}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>Nom : {voyageur.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Genre : {voyageur.genre}</ListGroupItem>
            <ListGroupItem>E-mail : {voyageur.email}</ListGroupItem>
            <ListGroupItem>
              {" "}
              Téléphone mobile : {voyageur.telephone}
            </ListGroupItem>
            {/* <ListGroupItem>Mot de passe : {voyageur.password}</ListGroupItem> */}
          </ListGroup>
        </Card.Body>

        <div>
          <Button onClick={() => dispatch(deleteVoyageur(voyageur._id))}>
            Supprimer
          </Button>
          {/* <Button>Editer</Button> */}
        </div>
      </Card>
    </div>
  );
}

export default VoyCard;
