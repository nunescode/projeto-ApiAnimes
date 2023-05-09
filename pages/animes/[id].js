import React from "react";

import Pagina from "@/components/Pagina";
import apiAnimes from "@/services/apiAnimes";

import { Card, Col, Row } from "react-bootstrap";

import Link from "next/link";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";


const Detalhes = ({ animeDetalhe }) => {
  return (
    <>
      <Pagina titulo={animeDetalhe.data.title}>
        <Row>
          <Col md={6}>
            <Card border="danger" >
              <Card.Header className="bg-danger text-white">Foto</Card.Header>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={animeDetalhe.data.images.jpg.image_url}
                />
                <Card.Text>
                  <Link className="btn btn-primary mt-3" href={animeDetalhe.data.images.webp.image_url}>
                    <BsArrowsFullscreen />
                    Ampliar
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Link className="btn btn-success mt-3" href={"/animes/"}>
              <FaArrowLeft />
              Voltar
            </Link>
          </Col>
          <Col md={6}>
            <Card border="danger">
              <Card.Header className="bg-danger text-white">
                {animeDetalhe.data.title}
              </Card.Header>
              <Card.Body>
                <p>
                  <strong>Episódios: </strong>
                  {animeDetalhe.data.episodes}
                </p>
                <p>
                  <strong>Status: </strong>
                  {animeDetalhe.data.status}
                </p>
                <p>
                  <strong>Ano: </strong>
                  {animeDetalhe.data.year}
                </p>
                <p>
                  <strong>Duração: </strong>
                  {animeDetalhe.data.duration}
                </p>
                <p>
                  <strong>Score: </strong>
                  {animeDetalhe.data.score}
                </p>
                <p>
                  <strong>Sinopse: </strong>
                  {animeDetalhe.data.synopsis}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Pagina>
    </>
  );
};


export default Detalhes;


export async function getServerSideProps(context) {
  const id = context.params.id;


  const resultado = await apiAnimes.get("/anime/" + id);


  const animeDetalhe = resultado.data;


  return {
    props: { animeDetalhe },
  };
}


