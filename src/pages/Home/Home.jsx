import React from "react";
import classes from "./Home.module.css";

import Hero from "../../components/Hero/Hero";
import LastTendecy from "../../components/LastTendecy/LastTendecy";

const Home = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <LastTendecy />
    </main>
  );
};

export default Home;
