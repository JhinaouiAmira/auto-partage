import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/conducteur";
function Navigation() {
  const dispatch=useDispatch()
  const {adminReducer:{isAuthAdmin},conducteurReducer:{isAuthConducteur},voyageurReducer:{isAuthVoyageur}}=useSelector((state)=>state)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/" > 
      <img style={{height:"50px"}} src="https://www.freecovoiturage.fr/assets/images/logo-free-covoiturage-200x200.png"/>
      Auto-Partage
      </Navbar.Brand>
        {/* <Navbar.Brand href="/">Auto-Partage</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Link>
            <Link to={"/about"}>
              <Nav.Link href="/about">About-Us</Nav.Link>
            </Link>
          </Nav>
          {isAuthAdmin || isAuthConducteur || isAuthVoyageur ? (<Link to={"/"} onClick={()=>dispatch(logout())}>
            <a href="#">Logout</a>
          </Link>):(
            <Nav>
            <Link to={"/signup"}>
              <Nav.Link href="/signup">S'inscrire</Nav.Link>
            </Link>
            <Link to={"/signin"}>
              <Nav.Link eventKey={2} href="/signin">
                Se connecter
              </Nav.Link>
            </Link>
          </Nav>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
