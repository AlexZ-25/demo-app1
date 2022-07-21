import React, { useEffect, useState }  from 'react'
import { useParams } from "react-router-dom";

const PersonPage = () => {

    const {idPerson} = useParams();
    const [person, setPerson] = useState([]);

    const personsData = async () => {
        const resultado = await fetch("https://fakerapi.it/api/v1/persons");
        const personas = await resultado.json();
        //console.log(personas.data[]);
        const persona = await personas.data
        const personaFiltradaAux = persona.filter(value => value.id === idPerson)
        const personaFiltrada = personaFiltradaAux[0]
        setPerson(personaFiltrada);
        // console.log(personas.data[idPerson]);
        // console.log(idPerson);
      };

      useEffect(() => {
        personsData();
      }, []);

  return (
    <>
        <img src={person.image} alt="imagen " />
    </>

  )
}

export default PersonPage