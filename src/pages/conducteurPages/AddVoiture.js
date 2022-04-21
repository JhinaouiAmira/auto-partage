import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVoiture } from "../../redux/actions/conducteur";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function AddVoiture() {
  const dispatch = useDispatch();
  const [newVoiture, setNewVoiture] = useState({
    immatriculation: "",
    marque: "",
    couleur: "",
    nombre_places: "",
  });
  const handleChange = (e) => {
    setNewVoiture({ ...newVoiture, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addVoiture(newVoiture));
  };
  // console.log()
  return (
    <div style={{ }}>
      <h2>Ajouter Voiture</h2>
      <form>
      <label>Immatriculation</label>
      <input
        type="text"
        name="immatriculation"
        placeholder="entrer ville de départ"
        onChange={handleChange}
      />
      <label>marque</label>
      <input
        type="text"
        name="marque"
        placeholder="Entrer  marque"
        onChange={handleChange}
      />
      <label>couleur</label>
      <input
        type="text"
        name="couleur"
        placeholder="entrer couleur"
        onChange={handleChange}
      />
      <label>nombre de places</label>
      <input
        type="text"
        name="nombre_places"
        placeholder="Entrer nombre places"
        onChange={handleChange}
      />
      <Link to={"/conducteur/voiture/all"}>
        <Button onClick={handleAdd}>Envoyer</Button>
      </Link>
      </form>
    </div>

    // <div>
    // <Row className="mb-3">
    //   <Form.Group  >
    //     <Form.Label>immatriculation</Form.Label>
    //     <Form.Control type="name" placeholder="Entrer immatriculation" onChange={handlechange}/>
    //   </Form.Group>

    //   <Form.Group  >
    //     <Form.Label>Marque</Form.Label>
    //     <Form.Control type="name" placeholder=" Entrer Marque" onChange={handlechange} />
    //   </Form.Group>
    // </Row>

    // <Row className="mb-3">
    //   <Form.Group >
    //     <Form.Label>Couleur</Form.Label>
    //     <Form.Control type="name" onChange={handlechange}/>
    //   </Form.Group>

    //   <Form.Group as={Col} controlId="formGridState">
    //     <Form.Label>Nombre de places</Form.Label>
    //     <Form.Select defaultValue="Choose..." onChange={handlechange}>
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //     </Form.Select>
    //   </Form.Group>
    // </Row>

    // <Button variant="primary" type="submit" onClick={handleadd}>
    //   Ajouter
    // </Button>
    // </div>
  );
}

export default AddVoiture;
