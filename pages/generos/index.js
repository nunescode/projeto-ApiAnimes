import Pagina from "@/components/Pagina";
import apiAnimes from "@/services/apiAnimes";
import React from "react";


const index = ({ generos }) => {
  return (
    <>
      <Pagina titulo="Generos">
        <ul>
          {generos.data.map((item) => (
            <li>
              {item.name} ({item.count})
            </li>
          ))}
        </ul>
      </Pagina>
    </>
  );
};


export default index;


export async function getServerSideProps(context) {
  const resultado = await apiAnimes.get("/genres/anime");
  const generos = resultado.data;


  return {
    props: { generos },
  };
}
