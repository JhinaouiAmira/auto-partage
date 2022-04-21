import React from "react";
import { useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteVoyage } from "../../redux/actions/conducteur";

function CardVoyage({ conduc }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead></thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <h5>ville de départ</h5> {conduc.ville_départ}
          </td>
          <td>
            <h5>ville d'arrivée</h5> {conduc.ville_arrivée}
          </td>
          <td>
            {" "}
            <h5>Date</h5>
            {conduc.date}
          </td>
          <td>
            {" "}
            <h5>Prix</h5>
            {conduc.prix}
          </td>
          <td>
            <Link to={"/conducteur/voiture/all"}>
              <Button>Détails</Button>
            </Link>
            <br />
            <br />
            <Button onClick={() => dispatch(deleteVoyage(conduc._id))}>
              supprimer
            </Button>
            <Button
              onClick={() => navigate(`/conducteur/voyage/edit/${conduc._id}`)}
            >
              Editer
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CardVoyage;
