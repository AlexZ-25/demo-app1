import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AlumnosPage = () => {
  const [alumnos] = useState([
    {
      id: 1,
      nombre: "Cesar",
    },
    {
      id: 2,
      nombre: "Jose",
    },
    {
      id: 3,
      nombre: "Pedro",
    },
  ]);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Ver Mas</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr>
              <th scope="row">{alumno.id}</th>
              <td>{alumno.nombre}</td>
              <td>
                <NavLink to={`/alumno/${alumno.id}`}>Ver mas...</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumnosPage;
