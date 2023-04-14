import React from "react";
import Products from "../../components/Products/Products";
import classes from "./Store.module.css";

const Store = () => {
  return (
    <main className={classes.store}>
      <Products />
    </main>
  );
};

export default Store;
