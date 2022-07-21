import React, { useState } from "react";

const EstadosPage = () => {
  const [contador, setCounter] = useState(0);
  const [nombre, setNombre] = useState();

  const aumentarContador = () => {
    setCounter(contador + 1);
  };

  const DecrementarContador = () => {
    setCounter(contador - 1);
  };

  const cambiarNombre = () => {
    setNombre('Alexis');
  }

  return(
    <>
    <header>
        <h1>Página de contador</h1>
    </header>
    <main>
        <article>
            <h2>Contador: {contador}</h2>
            <button class="btn btn-success me-1" onClick={aumentarContador}>Aumentar contador</button>
            <button class="btn btn-danger" onClick={DecrementarContador}>Decrementar contador</button>
            <h2>Nombre: {nombre}</h2>
            <button onClick={cambiarNombre}>Cambiar nombre</button>
        </article>
    </main>
    </>
    );
};

export default EstadosPage;
