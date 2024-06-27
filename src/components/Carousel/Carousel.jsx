import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change interval time as desired (in milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={styles["carousel"]}>
      <div
        className={styles["carouselInner"]}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={styles["carouselItem"]}>
            <img src={item} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className={styles["prevButton"]} onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles["icon"]} />
      </div>
      <div className={styles["nextButton"]} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} className={styles["icon"]} />
      </div>
    </div>
  );
};

export default Carousel;
