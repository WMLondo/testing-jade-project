import React, { useState } from "react";
import { Logo } from "../ui/ImageElement";
import Alert from "../ui/Alert";
import FormInput from "../FormInput/FormInput";
import { NavLink,useNavigate} from "react-router-dom";
import classes from "./Login.module.css";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      setEmail("");
      setPassword("");
      navigate("/dashboard")
    } catch (e) {
      setError("Error al iniciar sesion.");
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      {error && <Alert type="error">{error}</Alert>}
      <form className={classes["login-form"]} onSubmit={handleSubmit}>
        <Logo />
        <h2>Iniciar Sesion</h2>
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
        <button
          disabled={loading}
          type="submit"
          className={classes["login-form__submit-button"]}
        >
          INICIAR SESION
        </button>
      </form>
      <div className={classes["message_container"]}>
        Necesitas una cuenta?
        <NavLink to="/registrarme">Registrarme</NavLink>
      </div>
    </div>
  );
};

export default Login;