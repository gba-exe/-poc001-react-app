import React from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const login = () => {
      navigate("/entrar");
  }
  const signup = () => {
      navigate("/cadastro");
  }
  const home = () => {
      navigate("/");
  }


  return (
    <nav className={styles["navbar"]}>
      <h1 className={styles["logo"]} onClick={home}>LOJA</h1>

      <div className={styles["botoes"]}>
        <button
          className={styles["botao-signup"]}
          onClick={signup}
        >
          Cadastro
        </button>
        <button className={styles["botao-login"]} onClick={login}>
          Entrar
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
