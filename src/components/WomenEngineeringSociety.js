import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";

const WomenEngineering = ({ imgs, num }) => {
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Women in Engineering Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description">
          The CBIT IEEE Women in Engineering (WIE) branch, a vibrant extension
          of the global IEEE WIE initiative, empowers you to excel in
          engineering and technology. Here, you'll find a network of supportive
          peers and industry professionals, ready to connect and collaborate.
          Gain access to valuable resources and participate in workshops,
          conferences, and professional development events designed to hone your
          skills and propel you towards your career goals. Benefit from
          insightful mentorship opportunities, fostering your leadership
          potential. Don't just excel yourself, but become a role model!
          Participate in WIE's outreach programs, inspiring young girls to
          pursue STEM careers and contributing to a more diverse and inclusive
          engineering landscape for the future. Join the CBIT IEEE WIE and be a
          part of something bigge
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Women in Engineering Society's Team.
        </p>
        <CoreTeam
          num={num}
          folder="wie"
          names={["Saphalya Peta", "Vineela Singam"]}
        />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="women in engineering society" />
      </section>
      <Footer />
    </div>
  );
};

export default WomenEngineering;
