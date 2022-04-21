import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { deleteVoyage } from "../../redux/actions/admin";
function VoyageCard({ tab }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead>
        {/* <tr> */}
        {/* <th></th> */}
        {/* <th>Ville de départ : {tab.ville_départ}</th> */}
        {/* <th>Ville d'arrivée : {tab.ville_arrivée}</th> */}
        {/* <th>date : {tab.date}</th>  */}
        {/* <th>prix : {tab.prix}</th> */}
        {/* <th></th> */}
        {/* <Button onClick={()=>dispatch(deleteVoyage(tab._id))}><td>supprimer</td></Button> */}

        {/* </tr> */}
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <h5>ville de départ</h5> {tab.ville_départ}
          </td>
          <td>
            <h5>ville d'arrivée</h5> {tab.ville_arrivée}
          </td>
          <td>
            {" "}
            <h5>Date</h5>
            {tab.date}
          </td>
          <td>
            {" "}
            <h5>Prix</h5>
            {tab.prix}
          </td>
          <td>
            <Link to={"/admin/voiture/all"}>
              <Button>Détails</Button>
            </Link>
            <br />
            <br />
            <Button onClick={() => dispatch(deleteVoyage(tab._id))}>
              supprimer
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default VoyageCard;
