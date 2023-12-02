import React from "react";
import { Carousel, Container } from "react-bootstrap";
// import teamMembers from "./teamMembers"; // Import array of team members
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
    image: "core-team/j-secret.png",
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
    image: "documentation-team/4.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "sm&pr-team/5.png",
  },
  // Add more team members as needed
];

const TeamCarousel = ({ onSlideChange }) => {
  return (
    <Container className="mt-3">
      <Carousel
        interval={3000}
        pause={true}
        className="custom-carousel"
        onSlide={onSlideChange}
      >
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
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
