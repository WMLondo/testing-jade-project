import React, { useState, useEffect } from "react";
import classes from "./Dashboard.module.css";
import { useAuth } from "../../context/AuthContext";
import { NavLink,useNavigate } from "react-router-dom";

const targetDate = new Date("2023-04-10T00:00:00");

const Dashboard = () => {
  const [count, setCount] = useState(
    Math.floor((targetDate - new Date()) / 1000)
  );
  const { currentUser,logout } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try{
      await logout();
      navigate("/");
    }
    catch(e){
      console.log(e);
    }
  }

  let content = (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Esta pagina se encuentra en mantenimiento estimación aproximada
      </h1>
      <div className={classes["message_container"]}>
      <span onClick={handleLogout}>Cerrar sesion</span>
      </div>
      <h2 className={classes.counter}>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h2>
    </div>
  );

  if(!currentUser) {
    content = <div style={{
      display:"flex",
      width:"100%",
      height:"100vh",
    flexDirection:"column",
    justifyContent:"center",
    alignContent:"center"}}>
      <h1 style={{textAlign:"center"}}>Oh Oh. No deberias de estar en esta ruta sin un usuario que te supervise.</h1>
    <NavLink to="/" style={{textAlign:"center"}}>Regresar</NavLink>
    </div>
  }

  return <>{content}</>;
};

export default Dashboard;
