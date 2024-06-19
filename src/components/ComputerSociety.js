import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";

const ComputerSociety = ({ imgs, num }) => {
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Computer Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description">
          Aligned with the world's leading IEEE Computer Society, the CBIT
          IEEE's CS branch empowers your exploration of computing. Delve into a
          vast array of topics, from fundamentals to cutting-edge AI and Machine
          Learning. Access valuable IEEE CS publications, network with
          professionals, and participate in workshops and hackathons. Gain
          career guidance, mentorship, and leadership opportunities. Join our
          passionate community and embark on a transformative journey in
          computing!
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Computer Society's Team.
        </p>
        <CoreTeam
          num={num}
          folder="cs"
          names={["P.Abhiram", "Saiteja Veldoj"]}
        />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="computer society" />
      </section>
      <Footer />
    </div>
  );
};

export default ComputerSociety;
