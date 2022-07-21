import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    /* //Sistema de Navegacion */
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
              <NavLink
                to="/"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/help"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Help Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ucamper/34/alexis"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Ucamper Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/alumnos"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Alumnos Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/estados"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Estados Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/posts"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Posts Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/efectos"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Efectos Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/persons"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Persons Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/peliculas"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Peliculas Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/registrar-usuario"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Registrar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
