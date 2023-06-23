import React, { useState, useEffect } from "react";
import carousel from "./css/Carousel.module.css";

const Carousel = ({ images, duration = 2000, hoverDuration = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isHovered, duration, images.length]);

  const onMouseEnter = () => {
    setIsHovered(true);
    nextImage();
  };

  const onMouseLeave = () => {
    setCurrentIndex(0);
    setIsHovered(false);
  };

  return (
    <div
      className={carousel.carousel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`${carousel.carousel_image} ${
            index === currentIndex ? carousel.active : ""
          }`}
          //   style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className={`${carousel.carousel_image_half} ${carousel.left}`}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div
            className={`${carousel.carousel_image_half} ${carousel.right}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
