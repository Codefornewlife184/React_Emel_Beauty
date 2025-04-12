import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const images = [
    {
      src: "assets/img/slider/slider-1.webp",
    }
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={`Slide ${idx + 1}`}
          />
          <Carousel.Caption>
            <h3>{image.captionTitle}</h3>
            <p>{image.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
