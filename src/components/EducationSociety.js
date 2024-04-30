import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";

const EducationSociety = ({ imgs, num }) => {
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Education Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description">
          Fuel your passion for education and empower the next generation of
          engineers and computer scientists with the CBIT IEEE's Education
          Society branch! Aligned with the world-renowned IEEE EdSoc, we provide
          a dynamic platform for educators to connect, collaborate, and grow.
          Immerse yourself in a vibrant community of passionate educators,
          researchers, and industry professionals. Sharpen your skills through
          workshops, webinars, and summer institutes, exploring innovative
          teaching methodologies and accessing a wealth of resources designed to
          boost student engagement and learning outcomes. Don't just develop
          your own skills, be part of shaping the future! Collaborate with
          fellow educators, share best practices, and contribute to
          groundbreaking advancements in STEM education. The EdSoc actively
          advocates for strong STEM education policies, and you can join us in
          raising awareness about the importance of robust engineering and
          computer science programs. Together, let's ensure students are
          equipped with the knowledge and skills necessary to thrive in the
          ever-evolving world
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Education Society's Team.
        </p>
        <CoreTeam num={num} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="education society" />
      </section>
      <Footer />
    </div>
  );
};

export default EducationSociety;
