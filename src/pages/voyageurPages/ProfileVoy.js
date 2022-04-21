import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { deleteProfil } from "../../redux/actions/voyageur";
import ListByVoy from "./ListByVoy";

function ProfileVoy() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const load = useSelector((state) => state.voyageurReducer.load);
  const isAuthVoyageur = useSelector(
    (state) => state.voyageurReducer.isAuthVoyageur
  );
  const voyageur = useSelector((state) => state.voyageurReducer.voyageur);

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
          <h2>Votre profil</h2>
        </Card.Header>
        {load ? (
          <p>loaaaaaading</p>
        ) : isAuthVoyageur ? (
          <Card.Body>
            <Card.Title>Prénom: {voyageur.prenom}</Card.Title>
            <Card.Title>Nom: {voyageur.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Genre: {voyageur.genre}</ListGroupItem>
              <ListGroupItem>E-mail: {voyageur.email}</ListGroupItem>
              <ListGroupItem>
                {" "}
                Téléphone mobile : {voyageur.telephone}
              </ListGroupItem>
              {/* <ListGroupItem>Mot de passe : {voyageur.password}</ListGroupItem> */}
            </ListGroup>
          </Card.Body>
        ) : (
          <p>
            {alert("please check your email or password")}
            <Navigate to={"/voyageur/signin"} />
          </p>
        )}
        <div>
          <Button
            onClick={() => navigate(`/voyageur/updateProfil/${voyageur._id}`)}
            variant="primary"
          >
            Editer
          </Button>
          <Button onClick={()=>dispatch(deleteProfil(voyageur._id))} variant="primary">Supprimer</Button>
        </div>
      </Card>
      <ListByVoy/>
    </div>
  );
}

//   return <div style={{paddingTop:'100px'}}>
//       {load ? (
//         <p>loaaaaaading</p>
//       ) : isAuthVoyageur ? (
//         <div>
//           <h2>Profile Of: {voyageur.name} </h2>
//           <h5>Name: {voyageur.name}</h5>
//           <h5>Email: {voyageur.email}</h5>
//         </div>
//       ) : (
//         <div>
//           {alert("please check your email or password")}
//           <Navigate to={"/voyageur/signin"} />
//         </div>
//       )}
//   </div>;
// }

export default ProfileVoy;
