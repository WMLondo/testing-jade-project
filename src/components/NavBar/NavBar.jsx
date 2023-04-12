import React from "react";
import ListElement from "../ui/ListElement/ListElement";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { StyleNavLink } from "../ui/Link/Link";
import { Logo } from "../ui/Logo/Logo.style";

const NavBar = () => {
  return (
    <ul className={classes.container}>
      <ListElement>
        <StyleNavLink className={classes.link} to="/ofertas">
          Ofertas
        </StyleNavLink>
      </ListElement>
      <ListElement>
        <StyleNavLink className={classes.link} to="/novedades">
          Novedades
        </StyleNavLink>
      </ListElement>
      <ListElement>
        <StyleNavLink className={classes.link} to="/servicios">
          Servicios
        </StyleNavLink>
      </ListElement>
      <ListElement>
        <StyleNavLink className={classes.link} to="/categorias">
          Categorias
          <span className={classes.icon}>
            <box-icon name="chevron-down"></box-icon>
          </span>
        </StyleNavLink>
      </ListElement>
      <ListElement>
        <StyleNavLink className={classes.link} to="/">
          <Logo />
        </StyleNavLink>
      </ListElement>
      <ListElement>
        <StyleNavLink className={classes.link} to="/marcas">
          Marcas
          <span className={classes.icon}>
            <box-icon name="chevron-down"></box-icon>
          </span>
        </StyleNavLink>
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
        <StyleNavLink to="/iniciar-sesion" className={classes.link}>
          Iniciar Sesion{" "}
          <span className={classes.icon}>
            <box-icon name="search"></box-icon>
          </span>
        </StyleNavLink>
      </ListElement>
      <ListElement>
        <StyleNavLink to="/carrito" className={classes.link}>
          <span className={classes.icon}>
            <box-icon name="basket"></box-icon>
          </span>
          Cesta
        </StyleNavLink>
      </ListElement>
    </ul>
  );
};

export default NavBar;
