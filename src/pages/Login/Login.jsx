import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import logo from "../../utils/assets/loja-icon.png";

const Login = () => {
  const navigate = useNavigate();
  const logon = () => {
    navigate("/cadastro");
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const login = () => {
    api
      .post("/users/login", {
        email: email,
        password: senha,
      })
      .then((response) => {
        sessionStorage.setItem("email", email);
        if (response.data == true) {
          sessionStorage.setItem("logged", true);
          navigate("/");
        } else {
          alert("Email e/ou Senha inválidos");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };
  return (
    <>
      <NavBar logo={logo} />
      <div className={styles["override-content"]}>
        <div className={styles["background"]}>
          <div className={styles["linha-titulo"]}>
            <h1>Entrar:</h1>
          </div>
          <div className="input">
            Digite o seu email:
            <input
              type="text"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>
          <div className="input">
            Digite a sua senha:
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => handleInputChange(e, setSenha)}
            />
          </div>
          <p>
            Ainda não possui um cadastro? <a onClick={logon}>Cadastre-se</a>
          </p>
          <div className={styles["linha-botao"]}>
            <button onClick={login}>Entrar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
