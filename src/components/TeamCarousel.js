import React from "react";
import { Carousel, Container } from "react-bootstrap";
// import teamMembers from "./teamMembers"; // Import array of team members
const teamMembers = [
  {
    name: "John Doe",
    role: "Co-Founder",
    image: "president1.png",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "president1.png",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Director",
    image: "president1.png",
  },
  // Add more team members as needed
];

const TeamCarousel = () => {
  return (
    <Container className="mt-3">
      <Carousel interval={3000} pause={false} className="custom-carousel">
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`images/tech-team/${member.image}`}
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
