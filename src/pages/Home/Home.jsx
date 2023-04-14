import React from "react";
import classes from "./Home.module.css";

import Hero from "../../components/Hero/Hero";
import LastTendecy from "../../components/LastAddedItems/LastAddedItems";
import Services from "../../components/Services/Services";
import Divider from "../../components/ui/Divider/Divider";
import Tendecy from "../../components/Tendecy/Tendecy";
import Guide from "../../components/Guides/Guide";

const Home = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <LastTendecy />
      <Services />
      <Divider />
      <Tendecy />
      <Divider />
      <Guide />
    </main>
  );
};

export default Home;
