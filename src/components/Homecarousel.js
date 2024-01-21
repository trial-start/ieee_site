import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ val, imgs = ["ieee_cbit_logo.jpeg", "logo_n.jpg"] }) => {
  const carouselStyle = {
    paddingTop: val === "x" ? "" : "65px", // Adjust the value based on your NavBar height
  };

  return (
    <Carousel
      style={carouselStyle}
      interval={3000}
      className="custom-carousel"
      wrap
    >
      {imgs.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/${img}`}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            {/* <h3>{`Slide ${index + 1}`}</h3> */}
            {/* <p>{`Description for Slide ${index + 1}`}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;