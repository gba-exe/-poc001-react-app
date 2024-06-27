import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import CardProduto from "../../components/CardProduto/CardProduto";
import styles from "./Home.module.css";
import logo from "../../utils/assets/loja-icon.png";
import image1 from "../../utils/assets/girl-hearing-ridiculous-stupid-question-careless-unbothered-cute-redhead-woman-yellow-sweater.jpg";
import image2 from "../../utils/assets/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg";
import image3 from "../../utils/assets/surprised-excited-happy-girl-unwrapping-gifts-christmas-eve-new-year-celebration-smiling-amus.jpg";

const images = [image1, image2, image3];

const Home = () => {
  return (
    <>
      <NavBar logo={logo} />
      <Carousel items={images} />
      <div className="content">
        <div className={styles['linha-produto']}>
          <CardProduto
            titulo={"Santos"}
            preco={1912.0}
            descricao={"Sempre Santos"}
          />
          <CardProduto
            titulo={"Santos"}
            preco={1912.0}
            descricao={"Sempre Santos"}
          />
          <CardProduto
            titulo={"Santos"}
            preco={1912.0}
            descricao={"Sempre Santos"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
