import React, { useState } from "react";
import { Logo } from "../ui/ImageElement";
import Alert from "../ui/Alert";
import FormInput from "../FormInput/FormInput";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) return setError("Las contraseñas no coinciden.");

    if (password.length < 6)
      return setError("La contraseña no puede ser menor a 6 digitos");

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      setEmail("");
      setPassword("");
      setConfirm("");
      navigate("/iniciar-sesion")
    } catch (e) {
      setError("Error al crear la cuenta");
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      {error && <Alert type="error">{error}</Alert>}
      <form className={classes["login-form"]} onSubmit={handleSubmit}>
        <Logo />
        <h2>Registrarme</h2>

        <FormInput
          type="email"
          label="Correo Electronico"
          value={email}
          change={handleEmailChange}
        />
        <FormInput
          type="password"
          label="Contraseña"
          value={password}
          change={handlePasswordChange}
        />
        <FormInput
          type="password"
          label="Confirmar contraseña"
          value={confirm}
          change={handleConfirmChange}
        />
        <button
          disabled={loading}
          type="submit"
          className={classes["login-form__submit-button"]}
        >
          REGISTRARME
        </button>
      </form>
      <div className={classes["message_container"]}>
        Ya tienes una cuenta?
        <NavLink to="/iniciar-sesion">Iniciar Sesion</NavLink>
      </div>
    </div>
  );
};

export default SignUp;
