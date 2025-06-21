// Carousel.js
import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({
  val,
  type = "sample",
  ie = "n",
  imgs = "https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/carousel-1.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/master_class_1.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/udbhava.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/pes_event.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/cs_event.jpg--https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/css_event.jpg",
}) => {
  const carouselStyle = {
    paddingTop: val === "x" ? "" : "65px",
  };

  return (
    <div className="carousel-container" style={carouselStyle}>
      <Carousel
        interval={3000}
        className="styled-carousel"
        controls={true}
        pause="hover"
        wrap
        fade
      >
        {imgs?.split("--")?.map((img, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img 
                className="carousel-img" 
                src={img} 
                alt={`Slide ${index + 1}`} 
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;