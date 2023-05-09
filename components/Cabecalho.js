import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/animes">Animes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/animes">Animes</Nav.Link>
            <Nav.Link href="/generos">Gêneros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};


export default Cabecalho;