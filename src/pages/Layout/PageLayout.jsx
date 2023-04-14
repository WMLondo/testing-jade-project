import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PageLayout;
