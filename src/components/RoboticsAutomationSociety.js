import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./RASTeam";
import Footer from "./Footer";
import Carousel from "./RASCarousel";
import Events from "./Events";

const RoboticsAutomationSociety = ({ imgs, num }) => {
  const newImages = [
    "A:\IEEE\ieee_site\public\images\robo_soc.jpg",
    "A:\IEEE\ieee_site\public\images\ras.png",
  ];
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Robotics and Automation Society</h2>
        <Carousel val="x" imgs={newImages} />
        <p className="section-description" style={{ textAlign: "justify" }}>
        The IEEE Robotics and Automation Society (RAS) is a prominent professional organization operating under the umbrella of the Institute of Electrical and Electronics Engineers (IEEE). Established to propel the theory and application of robotics and automation, RAS engages in a multifaceted approach to advance the field. The society actively supports research and development by organizing conferences, workshops, and publications, facilitating the exchange of cutting-edge ideas and discoveries among its members. Education and outreach efforts are also a key focus, with RAS contributing to educational programs, providing resources for students and educators, and organizing events to raise awareness and interest in robotics and automation. Additionally, RAS plays a pivotal role in setting standards and best practices, ensuring the reliability and safety of robotic systems. By fostering a global network of professionals, researchers, and students, RAS serves as a hub for collaboration, offering opportunities for networking and knowledge exchange. Through its commitment to excellence, the IEEE Robotics and Automation Society continues to shape the future of robotics and automation, influencing technological innovation and promoting the widespread adoption of these technologies across various industries.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Robotics and Automation Society's Core Team. Their collective expertise and passion drive the society's success, ensuring its members remain at the forefront of advancements in robotics and automation engineering.
        </p>
        <br></br>
        <CoreTeam num={num} positions={["President", "Vice-President"]} names={["B. Uday Krishna Reddy","Dharani Sevireddy"]}/>
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="robotics and automation society" />
      </section>
      <Footer />
    </div>
  );
};

export default RoboticsAutomationSociety;