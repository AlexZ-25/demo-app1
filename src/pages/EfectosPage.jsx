import React, { useEffect, useState } from "react";

const EfectosPage = () => {

    const [nombre, setNombre] = useState("");
    const [contador, setContador] = useState(null);

    const cambiarNombre = () => {
        setNombre('Alexis');
    }

    const actualizarContador = () => {
        setContador(contador + 1);
    }
    
// // Empty dependencies array
//   useEffect(() => {
//     console.log("Se ejecuta cuando se abre la pagina");
//     return () => {
//       console.log("Se ejecuta cuando se cierra la pagina");
//     };
//   }, []);

// // Props or state values
//   useEffect(() => {
//     console.log(`Se detecta un cambio en la variable nombre`)
//   }, [nombre])
  
// No dependencies passed
useEffect(() => {
  console.log(`Hola ${nombre} se detecto cualquier cambio`);
},)


  return (
    <>
      <header>
        <h1>Página de efectos</h1>
        <button className="btn btn-success" onClick={cambiarNombre}>Cambiar Nombre</button>
        <button className="btn btn-danger" onClick={actualizarContador}>Actualizar Contador</button>
        <p>{contador}</p>
      </header>
    </>
  );
};

export default EfectosPage;
