import React from "react";
import logo from "../../../assets/logo/logo-jade_page-0001.jpg";
import classes from "./Logo.module.css";

const Logo = () => {
  return <img src={logo} alt="jade-logo" className={classes.logo} />;
};

export default Logo;
