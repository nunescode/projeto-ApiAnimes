import React from "react";
import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";


const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-dark text-white py-2 text-center margin-bottom mb-3">
        <h3>{props.titulo}</h3>
      </div>
      <Container>{props.children}</Container>
      <Container />
    </>
  );
};


export default Pagina;