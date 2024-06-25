import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <p className={styles["numeros"]}>404</p>
        <h1>Página não encontrada!</h1>
      </div>
    </>
  );
};

export default NotFound;