import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const login = async () => {
    try {
      const auth = getAuth();
      const resp = await signInWithEmailAndPassword(
        auth,
        "castal@correo.com",
        "castal12"
      );
      console.log(resp)
    } catch (error) {
        console.log(error.message)
    }
  };

  const variablesEntorno = () => {
    console.log(process.env.REACT_APP_APIKEY);
  }

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <article>
          <button type="button" className="btn btn-success" onClick={login}>
            Iniciar sesión
          </button>
          <button type="button" className="btn btn-success" onClick={variablesEntorno}>
            Variables de entorno
          </button>
        </article>
      </main>
    </>
  );
};

export default LoginPage;
