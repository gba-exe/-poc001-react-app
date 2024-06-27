import React, { useState, useEffect } from "react";

import styles from "./CardProduto.module.css";

const CardProduto = ({ titulo, descricao, preco }) => {
    const [image, setImage] = useState(null);
    const [imagePaths] = useState([
        "../../utils/assets/cell-phone-shopping-cart-online-shopping-mobile-shopping-concept.jpg",
        "../../utils/assets/close-up-view-online-shopping-concept.jpg",
        "../../utils/assets/cyber-monday-shopping-sales.jpg"
    ]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const selectedImage = imagePaths[randomIndex];
        setImage(selectedImage);
    }, [imagePaths]);

    if (!image) {
        return <div>Loading...</div>; // Placeholder for loading state
    }

    return (
        <div className={styles.cardProduto}>
            <img src={image} alt="Produto" />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <p>R$ {preco.toFixed(2)}</p>
            <button className={styles.botaoVerMais}>Ver mais</button>
        </div>
    );
};

export default CardProduto;