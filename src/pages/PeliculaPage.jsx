import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const PeliculaPage = () => {
  const [pelicula, setPelicula] = useState({});
  const { idPelicula } = useParams();

  useEffect(() => {
    const obtenerPelicula = async () => {
      const resp = await getDoc(doc(db, "peliculas", idPelicula));
      setPelicula(resp.data());
    };

    obtenerPelicula();
  }, []);

  return (
    <>
      <header>
        <h1>Página principal de película</h1>
      </header>
      <main>
        <h1>id: {idPelicula}</h1>
        <h3>{pelicula.nombre}</h3>
        <p>{pelicula.descripcion}</p>
        <p>{pelicula.precio}</p>
      </main>
    </>
  );
};

export default PeliculaPage;
