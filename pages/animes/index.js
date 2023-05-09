import Pagina from "@/components/Pagina";
import apiAnimes from "@/services/apiAnimes";
import Link from "next/link";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';




const index = ({ animes }) => {
  return (
    <>
      <Pagina titulo="Animes">
        <Row>
          <Col md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Detalhes</th>
                  <th>Título</th>
                  <th>Duração</th>
                  <th>Ano</th>
                </tr>
              </thead>
              <tbody>
                {animes.data.map((item) => (
                  <tr key={item.mal_id}>
                    <td>
                      <Link href={'/animes/' + item.mal_id}>
                          <FaSearch/>
                      </Link>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.duration}</td>
                    <td>{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Pagina>
    </>
  );
};


export default index;


export async function getServerSideProps(context) {


  const resultado = await apiAnimes.get("/top/anime");
  const animes = resultado.data;


  return {
    props: { animes },
  };
}
