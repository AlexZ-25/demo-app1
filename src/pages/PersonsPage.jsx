import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PersonsPage = () => {
  const [persons, setPersons] = useState([]);

  const personsData = async () => {
    const resultado = await fetch("https://fakerapi.it/api/v1/persons");
    const personas = await resultado.json();
    console.log(personas.data);
    setPersons(personas.data);
    // console.log(persons);
  };

  useEffect(() => {
    personsData();
  }, []);

  return (
    <>
      <header>
        <h1>Persons Page</h1>
      </header>
      <main>
        <ul>
          {persons.map((person) => (
            <NavLink to={`/person/${person.id}`}>
              <li key={person.id}>
                <p>
                  {person.firstname} {person.lastname}
                </p>
              </li>
            </NavLink>
          ))}
        </ul>
      </main>
    </>
  );
};

export default PersonsPage;
