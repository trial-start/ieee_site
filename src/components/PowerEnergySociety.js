import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";
import TeamMembers from "./TeamMembers";

const PowerEnergySociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "Osman", position: "Documentation" },
    { name: "Maruthi", position: "Design" },
    { name: "Vamsi Krishna", position: "Design" },
    { name: "Fatema", position: "Design" },
    { name: "Bhavana", position: "SM & PR" },
    { name: "Surya Teja", position: "SM & PR" },
  ];
  return (
    <div style={{ backgroundColor: '#a4eb85', minHeight: '100vh' }}>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about" style={{textAlign: "center", backgroundColor: '#a4eb85', minHeight: '100vh' }}>
        <h2 className="section-heading">Power and Energy Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description" style={{textAlign: 'justify'}}>
          The CBIT IEEE Student Chapter's Power & Energy Society (PES) branch
          ignites your passion for the world that energizes our lives. Aligned
          with the esteemed IEEE PES, we delve into the intricacies of electric
          power and energy. Explore a vast spectrum of topics, from power system
          planning and control to the future of renewable energy sources like
          solar and wind. Gain access to valuable publications, connect with
          industry professionals, and participate in workshops and conferences.
          Sharpen your skills through mentorship and potentially contribute to
          shaping sustainable energy solutions. Join our dynamic community and
          become a part of the revolution in power and energy!
        </p>
      </section>
      <section className="core-team-section" id="coreteam" style={{backgroundColor: '#a4eb85', minHeight: '100vh' }}>
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Team 2023-2024
        </h2>
        <p className="section-description" style={{ textAlign: "center" }}>
          Meet the dedicated members of our Power and Energy Society's Team
        </p>
        <CoreTeam num={num} folder="pes" names={["Saiteja", "Pallavi"]} />
        <h4 style={{ textAlign: "center" }}>Junior EB</h4>
        <TeamMembers members={teamMembers} />
      </section>
      <section className="core-team-section" id="events" style={{ backgroundColor: '#a4eb85', minHeight: '100vh' }}>
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="Power and Energy Society" />
      </section>

      <Footer by="power and energy society" />
    </div>
  );
};

export default PowerEnergySociety;
