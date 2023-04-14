import React, { useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const targetDate = new Date("2023-04-08T00:00:00");
  const [count, setCount] = useState(
    Math.floor((targetDate - new Date()) / 1000)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <NavBar />
      <div className={classes.container}>
        <h1 className={classes.title}>
          Esta pagina se encuentra en mantenimiento estimación aproximada
        </h1>
        <h2 className={classes.counter}>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </>
  );
};

export default HomePage;
