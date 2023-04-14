import React from "react";
import ListElement from "../ui/ListElement";
import ImageElement, { Logo } from "../ui/ImageElement";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className={classes.container}>
      <ListElement>
        <NavLink className={classes.link} to="/ofertas">
          Ofertas
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink className={classes.link} to="/novedades">
          Novedades
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink className={classes.link} to="/servicios">
          Servicios
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink className={classes.link} to="/categorias">
          Categorias
          <span className={classes.icon}>
            <i className="bx bx-chevron-down"></i>
          </span>
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink className={classes.link} to="/">
          <Logo />
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink className={classes.link} to="tienda">
          Marcas
          <span className={classes.icon}>
            <i className="bx bx-chevron-down"></i>
          </span>
        </NavLink>
      </ListElement>
      <ListElement>
        <div className={classes.link}>
          <span className={classes.icon}>
            <i className="bx bx-search"></i>
          </span>{" "}
          Buscar
        </div>
      </ListElement>
      <ListElement>
        <NavLink to="/iniciar-sesion" className={classes.link}>
          Iniciar Sesion{" "}
          <span className={classes.icon}>
            <i className="bx bx-user-circle"></i>
          </span>
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink to="/carrito" className={classes.link}>
          <span className={classes.icon}>
            <i className="bx bx-basket"></i>
          </span>
          Cesta
        </NavLink>
      </ListElement>
    </ul>
  );
};

export default NavBar;
