import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Logon.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import logo from "../../utils/assets/loja-icon.png"

const Logon = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/entrar");
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cSenha, setCSenha] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const cadastrar = () => {
    if (senha !== cSenha) {
      alert("As senhas devem ser iguais!");
      return;
    }

    api
      .post("/users", {
        name: nome,
        email: email,
        password: senha,
      })
      .then(() => {
        sessionStorage.setItem("email", email);
        login();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  return (
    <>
      <NavBar logo={logo}/>
      <div className={styles['override-content']}>
        <div className={styles["background"]}>
          <div className={styles["linha-titulo"]}>
            <h1>Cadastre-se:</h1>
          </div>
          <div className="input">
            Digite o seu nome completo:
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => handleInputChange(e, setNome)}
            />
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
          <div className={styles['info-senha']}>
            <p>A senha deve conter: </p>
            <ul>
              <li>8 caracteres</li>
              <li>Pelo menos uma letra maiúscula</li>
              <li>Pelo menos um número</li>
              <li>Pelo menos um caracter especial (!#$%&? "*@-)</li>
            </ul>
          </div>
          <div className="input">
            Confirme a sua senha:
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={cSenha}
              onChange={(e) => handleInputChange(e, setCSenha)}
            />
          </div>
          <p> 
            Já possui um cadastro? <a onClick={login}>Entrar</a>
          </p>
          <div className={styles["linha-botao"]}>
            <button onClick={cadastrar}>Cadastrar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logon;
