import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { deleteConducteur } from "../../redux/actions/admin";

function ConCard({ con }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card border="primary" style={{ width: "18rem", marginTop: "50px" }}>
        <Card.Img
          style={{ height: "160px" }}
          variant="top"
          src="https://www.assuronline.com/wp-content/uploads/2020/05/Jeuneconducteur7.png"
        />
        <Card.Header>
          <h3>Prénom : {con.prenom}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>Nom : {con.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Genre : {con.genre}</ListGroupItem>
            <ListGroupItem>E-mail : {con.email}</ListGroupItem>
            <ListGroupItem> Téléphone mobile : {con.telephone}</ListGroupItem>
            {/* <ListGroupItem>Mot de passe : {con.password}</ListGroupItem> */}
          </ListGroup>
        </Card.Body>
        <div>
          <Button onClick={() => dispatch(deleteConducteur(con._id))}>
            Supprimer
          </Button>

          {/* <Link to={`/admin/conducteur/edit/${con._id}`}>
    <Button >Editer</Button>
    </Link> */}
        </div>
      </Card>
    </div>
  );
}

export default ConCard;
