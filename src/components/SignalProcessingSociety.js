import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";
import TeamMembers from "./TeamMembers";

const SignalProcessingSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "Mythri", position: "Documentation" },
    { name: "Sruthi", position: "Documentation" },
    { name: "Shankar Narayana", position: "Tech" },
    { name: "Samhitha", position: "Tech" },
    { name: "Chaitanyya", position: "Tech" },
    { name: "Manikanta", position: "Design" },
    { name: "Srilekha", position: "Design" },
    { name: "Yashasvi", position: "SM & PR" },
  ];
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Signal Processing Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description">
          The CBIT IEEE Student Chapter's Signal Processing Society (SPS) branch
          fuels your passion for analyzing, interpreting, and manipulating
          signals - the building blocks of audio, speech, images, and more.
          Aligned with the world's leading IEEE SPS, we offer a comprehensive
          exploration of this dynamic field. From core signal and image
          processing to cutting-edge applications in speech, audio, multimedia,
          and communication, you'll gain access to valuable resources, connect
          with experts, and participate in workshops and conferences. Sharpen
          your skills, gain insights through mentorship, and potentially
          contribute to groundbreaking research. Join our vibrant community and
          embark on a rewarding journey into the world of signals!
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Team
        </h2>
        <p className="section-description" style={{ textAlign: "center" }}>
          Meet the dedicated members of our Signal Processing Society's Team
        </p>
        <CoreTeam num={num} folder="sps" names={["Bhagath", "P.Ajay reddy"]} />
        <h4 style={{ textAlign: "center" }}>Junior EB</h4>
        <TeamMembers members={teamMembers} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="Signal Processing Society" />
      </section>
      <Footer />
    </div>
  );
};

export default SignalProcessingSociety;
