import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./NotFound.module.css"
import logo from "../../utils/assets/loja-icon.png"

const NotFound = () => {
  return (
    <>
      <NavBar logo={logo}/>
      <div className="content">
        <p className={styles["numeros"]}>404</p>
        <h1>Página não encontrada!</h1>
      </div>
    </>
  );
};

export default NotFound;