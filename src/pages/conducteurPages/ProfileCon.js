import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import AddVoy from "./AddVoy";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { deleteProfil } from "../../redux/actions/conducteur";

function ProfileCon() {
  const load = useSelector((state) => state.conducteurReducer.load);
  const isAuthConducteur = useSelector(
    (state) => state.conducteurReducer.isAuthConducteur
  );
  const conducteur = useSelector((state) => state.conducteurReducer.conducteur);
  const dispatch = useDispatch();
  return (
    <div>
      <Card
        className="text-center"
        style={{
          paddingLeft: "300px",
          paddingRight: "300px",
          paddingBottom: "50px",
          backgroundColor: "beige",
        }}
      >
        <Card.Header>
          {" "}
          <h2>Votre Profil</h2>
        </Card.Header>
        {load ? (
          <p>loaaaaaading</p>
        ) : isAuthConducteur ? (
          <Card.Body>
            <Card.Title>Prénom: {conducteur.prenom}</Card.Title>
            <Card.Title>Nom: {conducteur.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Genre: {conducteur.genre}</ListGroupItem>
              <ListGroupItem>E-mail: {conducteur.email}</ListGroupItem>
              <ListGroupItem>
                {" "}
                Téléphone mobile : {conducteur.telephone}
              </ListGroupItem>
              {/* <ListGroupItem>
                Mot de passe : {conducteur.password}
              </ListGroupItem> */}
            </ListGroup>
          </Card.Body>
        ) : (
          <p>
            {alert("please check your email or password")}
            <Navigate to={"/conducteur/signin"} />
          </p>
        )}
        <div>
          {/* use navigate */}
          <Link to={`/conducteur/editProfil/${conducteur._id}`}>
            <Button variant="primary">Editer</Button>
          </Link>
          <Link to={"/"}>
            <Button
              variant="primary"
              onClick={() => dispatch(deleteProfil(conducteur._id))}
            >
              Supprimer
            </Button>
          </Link>
        </div>
      </Card>
      <div >
        <AddVoy />
        <Link to={"/conducteur/voiture/add"}>
        {/* <Button> Ajouter votre voiture</Button> */}
        <Button style={{marginTop:"20px",marginBottom:"50px",marginRight:"70px"}} variant="secondary" size="lg">Ajouter votre voiture</Button>
        </Link>
        {/* <AddVoiture /> */}
      </div>
    </div>
  );
}

export default ProfileCon;
// <div>
// <h2>Profile Of: {conducteur.name} </h2>
// <div style={{paddingTop:'20px',display:"block"}}>
//   {load ? (
//     <p>loaaaaaading</p>
//   ) : isAuthConducteur ? (
//     <div>

//       <h5>Name: {conducteur.name}</h5>
//       <h5>Email: {conducteur.email}</h5>
//       {/* <h5>voiture: {voiture.immatriculation}</h5> */}
//     </div>
//   ) : (
//     <div>
//       {alert("please check your email or password")}
//       <Navigate to={"/conducteur/signin"} />
//     </div>
//   )}
//   <div>
//     <AddVoy/>
//   </div>
// </div>
// </div>
