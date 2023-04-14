import React from "react";
import Logo from "../ui/Logo/Logo";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className={classes.container}>
      <li className={classes.list}>
        <NavLink className={classes.link} to="/ofertas">
          Ofertas
        </NavLink>
      </li>
      <li className={classes.list}>
        <NavLink className={classes.link} to="/novedades">
          Novedades
        </NavLink>
      </li>
      <li className={classes.list}>
        <NavLink className={classes.link} to="/servicios">
          Servicios
        </NavLink>
      </li>
      <li className={classes.list}>
        <NavLink className={classes.link} to="/categorias">
          Categorias
          <span className={classes.icon}>
            <box-icon name="chevron-down"></box-icon>
          </span>
        </NavLink>
      </li>
      <li className={classes.list}>
        <NavLink className={classes.link} to="/">
          <Logo />
        </NavLink>
      </li>
      <li className={classes.list}>
        <NavLink className={classes.link} to="/marcas">
          Marcas
          <span className={classes.icon}>
            <box-icon name="chevron-down"></box-icon>
          </span>
        </NavLink>
      </li>
      <li className={classes.list}>
        <div className={classes.link}>
          <span className={classes.icon}>
            <box-icon name="search"></box-icon>
          </span>
          Buscar
        </div>
      </li>
      <li className={classes.list}>
        <NavLink to="/iniciar-sesion" className={classes.link}>
          <span className={classes.icon}>
            <box-icon name="user-circle"></box-icon>
          </span>
          Iniciar Sesion
        </NavLink>
      </li>
      <li className={classes.list}>
        <NavLink to="/cesta" className={classes.link}>
          <span className={classes.icon}>
            <box-icon name="basket"></box-icon>
          </span>
          Cesta
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
