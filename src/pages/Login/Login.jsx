import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <div className={styles["background"]}>
            <div className={styles["linha-titulo"]}>
                <h1>Entrar:</h1>
            </div>
            <div className="input">
                Digite o seu email:
                <input type="text" placeholder="E-Mail" />
            </div>
            <div className="input">
                Digite a sua senha:
                <input type="text" placeholder="*************" />
            </div>
            <div className={styles["linha-botao"]}>
                <button>Entrar</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
