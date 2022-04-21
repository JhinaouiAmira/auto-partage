import React from 'react'
import {Table, Button } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CardByVoy({voya}) {
    // const navigate = useNavigate();
//   const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
    <thead></thead>
    <tbody>
      <tr>
        <td>
          {" "}
          <h5>ville de départ</h5> {voya.ville_départ}
        </td>
        <td>
          <h5>ville d'arrivée</h5> {voya.ville_arrivée}
        </td>
        <td>
          {" "}
          <h5>Date</h5>
          {voya.date}
        </td>
        <td>
          {" "}
          <h5>Prix</h5>
          {voya.prix}
        </td>
        <td>
          <Link to={"/conducteur/voiture/all"}>
            <Button>Détails</Button>
          </Link>
          <br />
          <br />
          <Link to={"/voyageur/resvoyage"}>
          <Button>Réserver</Button>
          </Link>
        </td>
      </tr>
    </tbody>
  </Table>
  )
}

export default CardByVoy