import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ val }) => {
  const carouselStyle = {
    paddingTop: val === "x" ? "" : "56px", // Adjust the value based on your NavBar height
  };

  return (
    <Carousel style={carouselStyle} interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src="images/tem.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Description for Slide 1</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1100x500"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Description for Slide 2</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Add more Carousel items as needed */}
    </Carousel>
  );
};

export default ImageCarousel;
