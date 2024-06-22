import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";
import TeamMembers from "./TeamMembers";

const CircuitsAndSystems = ({ imgs, num }) => {
  const teamMembers = [
    { name: "Malay", position: "Documentation" },
    { name: "Surya Prakash", position: "Documentation" },
    { name: "Samith", position: "Documentation" },
    { name: "Haindavi", position: "Documentation" },
    { name: "Vinyaswi", position: "Tech" },
    { name: "Varshini", position: "Design" },
    { name: "Swarzina", position: "SM & PR" },
    { name: "Gayatri", position: "SM & PR" },
    { name: "Charan", position: "SM & PR" },
  ];
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Circuits and Systems Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description">
          Dive deeper into the building blocks of technology with the CBIT IEEE
          Circuits and Systems (CAS) branch! Aligned with the world-renowned
          IEEE CAS society, we offer a comprehensive exploration of this dynamic
          field. From the fundamentals of analog and digital circuits to
          cutting-edge applications in integrated circuits, signal processing,
          communication systems, and even neural networks, you'll gain access to
          valuable resources, connect with experts, and participate in workshops
          and conferences. Sharpen your skills through mentorship, potentially
          contribute to groundbreaking research, and collaborate with industry
          professionals to bridge the gap between theory and real-world
          applications. Join our vibrant community and embark on a rewarding
          journey into the world of circuits and systems!
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Team
        </h2>
        <p className="section-description" style={{ textAlign: "center" }}>
          Meet the dedicated members of our Circuits and Systems Society's Team
        </p>
        <CoreTeam
          num={num}
          folder="ckts"
          names={["Rajeshwar reddy", "Vaishnavi Sanugommula"]}
        />
        <h4 style={{ textAlign: "center" }}>Junior EB</h4>
        <TeamMembers members={teamMembers} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="Circuits and Systems Society" />
      </section>
      <Footer />
    </div>
  );
};

export default CircuitsAndSystems;
