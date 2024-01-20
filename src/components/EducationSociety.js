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
          Sure. Here are small descriptions of the following societies which are
          part of the IEEE club: Computer Society Computer Society logoOpens in
          a new window www.computer.org Computer Society logo The Computer
          Society (CS) is the world's largest professional organization
          dedicated to advancing technology for the benefit of humanity. It has
          over 100,000 members in 180 countries around the world. The CS
          provides resources and opportunities for professionals in the
          computing field, including conferences, publications, and educational
          programs. It also advocates for the responsible use of technology and
          promotes diversity and inclusion in the computing field.
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
