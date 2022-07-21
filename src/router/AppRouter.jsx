// TODOS LOS COMPONENTES EN REACT EMPIEZAN EN MAYUSCULAS!!!
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import RegistrarPersonasPage from "../pages/RegistrarPersonasPage";
import ListarPersonasPage from "../pages/ListarPersonasPage";
import BlogPage from "../pages/BlogPage";
import NavBar from "../components/NavBar";
import UcamperPage from "../pages/UcamperPage";
import AlumnosPage from "../pages/AlumnosPage";
import AlumnoPage from "../pages/AlumnoPage";
import EstadosPage from "../pages/EstadosPage";
import PostsPage from "../pages/PostsPage";
import EfectosPage from "../pages/EfectosPage";
import PostPage from "../pages/PostPage";
import PersonsPage from "../pages/PersonsPage";
import PersonPage from "../pages/PersonPage";
import PeliculasPage from "../pages/PeliculasPage";
import PeliculaPage from "../pages/PeliculaPage";
import RegistrarUsuario from "../pages/RegistrarUsuario";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          {/* //Sistema de enrutamiento */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route
            path="/registrar-personas"
            element={<RegistrarPersonasPage />}
          />
          <Route path="/listar-personas" element={<ListarPersonasPage />} />
          <Route
            path="/blog"
            element={
              <BlogPage
                articulos={["titulo1", "titulo2", "titulo3"]}
                nombre="Alexis"
              />
            }
          />
          <Route path="/ucamper/:id/:nombre" element={<UcamperPage />} />
          <Route path="/alumnos" element={<AlumnosPage />} />
          <Route path="/alumno/:id_alumno" element={<AlumnoPage />} />
          <Route path="/estados" element={<EstadosPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:idPost" element={<PostPage />} />
          <Route path="/efectos" element={<EfectosPage />} /> 
          <Route path="/persons" element={<PersonsPage/>} />
          <Route path="/person/:idPerson" element={<PersonPage/>} />
          <Route path="/peliculas" element={<PeliculasPage/>} />
          <Route path="/pelicula/:idPelicula" element={<PeliculaPage/>} />
          <Route path="/registrar-usuario" element={<RegistrarUsuario/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
