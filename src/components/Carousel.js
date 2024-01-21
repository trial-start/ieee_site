import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ val, type = "sample", ie = "n", event_img }) => {
  const carouselStyle = {
    paddingTop: val === "x" ? "" : "65px",
  };

  const numberOfImages = 4;
  const imgs = Array.from({ length: numberOfImages }, (_, index) => index);

  return (
    <Carousel
      style={carouselStyle}
      interval={3000}
      className="custom-carousel"
      controls={false}
      pause={true}
      wrap
    >
      {imgs.map((index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={
              index === 0 && ie === "y"
                ? event_img
                : `${process.env.PUBLIC_URL}/images/${type}/img${index}.png`
            }
            // src={require(`../images/${type}/img${index}.jpg`)}
            alt={`Slide ${index + 1}`}
          />
          {/* <Carousel.Caption>
            <h3>{`Slide ${index + 1}`}</h3>
            <p>{`Description for Slide ${index + 1}`}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;