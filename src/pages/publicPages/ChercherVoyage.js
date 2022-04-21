import React from 'react'
import {Form,Row,Col,InputGroup,FormControl,Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
function ChercherVoyage({inputSearch,setInputSearch}) {
  return (
    <div style={{paddingLeft:"300px",paddingRight:"200px",paddingTop:"20px",paddingBottom:"20px"}}>
        <h3>Trouver votre trajet</h3>
    <Row className="align-items-center">
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="ville de départ"
          onChange={(e)=>setInputSearch(e.target.value)}
        />
      </Col>
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
          Username
        </Form.Label>
        <InputGroup className="mb-2">
          {/* <InputGroup.Text>@</InputGroup.Text> */}
          <FormControl id="inlineFormInputGroup" placeholder="ville d'arrivée"  onChange={(e)=>setInputSearch(e.target.value)} />
        </InputGroup>
      </Col>
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
          Username
        </Form.Label>
        <InputGroup className="mb-2">
          <FormControl id="inlineFormInputGroup" placeholder="DD/MM/YYYY"  onChange={(e)=>setInputSearch(e.target.value)} />
        </InputGroup>
      </Col>
      
      <Col xs="auto">
        <Link to={"/admin/voyage/all"}>
        <Button type="submit" className="mb-2">
          Chercher
        </Button>
        </Link>
      </Col>
    </Row>
    </div>
  )
}

export default ChercherVoyage