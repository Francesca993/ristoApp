import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function BarraDiNavigazione() {
  return (
    <Navbar
      expand="lg"
      className="justify-content-between"
      id="bkgNavbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Qui andrà il logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Booking&Contatti</Nav.Link>
            <NavDropdown title="Il Nostro Menù" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Antipasti</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Primi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Secondi&Contorni
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Dolci</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                La Nostra Carta Dei Vini
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className="d-flex justify-content-end m-4">
        <Button variant="light" size="lg" className="m-2">
          Registrati
        </Button>
        <Button variant="light" className="m-2">
          Accedi
        </Button>{" "}
      </Container>
    </Navbar>
  );
}
