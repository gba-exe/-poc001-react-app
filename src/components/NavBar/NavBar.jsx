import React from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({ logo }) => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/entrar");
  };
  const signup = () => {
    navigate("/cadastro");
  };
  const home = () => {
    navigate("/");
  };

  return (
    <nav className={styles["navbar"]}>
      <img
        onClick={home}
        src={logo}
        className={styles["logo"]}
        alt="Logo de loja"
      />
      <div className={styles["botoes"]}>
        <button className={styles["botao-login"]} onClick={login}>
          Entrar
        </button>
        <button className={styles["botao-signup"]} onClick={signup}>
          Cadastro
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
