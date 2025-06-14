import React, { useEffect, useRef, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./TeamCarousel.css"; // Import the CSS file for animations

const teamMembers = [
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "core-team/pres.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "core-team/v-pres.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "core-team/secret.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "core-team/tress.png",
  },
  {
    name: "John Doe",
    role: "Co-Founder",
    image: "tech-team/2.png",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "design-team/3.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "sm&pr-team/5.png",
  },
  // Society chairs and vice chairs
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/cas1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/cas2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/cs1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/cs2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/es1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/es2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/pes1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/pes2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/ras1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/ras2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/sps1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/sps2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/ws1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/ws2.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/vts1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "soc/vts2.png",
  }
];

const TeamCarousel = ({ onSlideChange }) => {
  const [startCarousel, setStartCarousel] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ref = carouselRef.current; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCarousel) {
          setStartCarousel(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [startCarousel]);


  return (
    <Container className="mt-3" ref={carouselRef}>
      <Carousel
        interval={startCarousel ? 3000 : null} // Start interval only when visible
        pause={true}
        className="custom-carousel"
        onSlide={onSlideChange}
        controls={false}
      >
        {teamMembers.map((member, index) => (
          <Carousel.Item
            key={index}
            className={`fade-in ${startCarousel ? "visible" : ""}`} // Add fade-in class
          >
            <img
              className="team-carousel-img"
              src={`images/${member.image}`}
              alt={`Team member ${index + 1}`}
            />
            <Carousel.Caption>
              {/* <h3>{member.name}</h3>
              <p>{member.role}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TeamCarousel;
