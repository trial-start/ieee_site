import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";
import TeamMembers from "./TeamMembers";

const RoboticsAutomationSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "Sowjanya", position: "Documentation" },
    { name: "Chaithra", position: "Documentation" },
    { name: "Khashyap", position: "Documentation" },
    { name: "Sushanth", position: "Tech" },
    { name: "Akshara", position: "Tech" },
    { name: "Yashwanth", position: "Tech" },
    { name: "Seema", position: "Design" },
    { name: "Disha", position: "SM & PR" },
  ];
  return (
    <div style={{ backgroundColor: '#ffc0c0', minHeight: '100vh' }}>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about" style={{ textAlign: 'center',backgroundColor: '#ffc0c0', minHeight: '100vh' }}>
        <h2 className="section-heading">Robotics and Automation Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description" style={{textAlign: 'justify'}}>
        The IEEE Robotics and Automation Society (IEEE RAS) is a global community dedicated to advancing innovation, education, and fundamental research in robotics and automation. IEEE RAS fosters the development and dissemination of scientific knowledge in these fields, supporting the professional growth of its members and promoting the impact of robotics and automation on society. Through conferences, publications, and technical activities, IEEE RAS connects professionals, researchers, and students, enabling collaboration and the exchange of ideas to drive technological advancements and address real-world challenges in robotics and automation. The society also provides resources for career development, including networking opportunities, technical workshops, and continuing education programs. IEEE RAS plays a pivotal role in shaping the future of robotics and automation, influencing industry standards and fostering the next generation of innovators and leaders in the field.
        </p>
      </section>
      <section className="core-team-section" id="coreteam" style={{ backgroundColor: '#ffc0c0', minHeight: '100vh' }}>
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Team 2023-2024
        </h2>
        <p className="section-description" style={{ textAlign: "center" }}>
          Meet the dedicated members of our Robotics and Automation Society's
          Team
        </p>
        {/* <CoreTeam num={num} folder="ckts" names={[" Rajeshwar reddy", ""]} /> */}

        <CoreTeam
          num={num}
          folder="ras"
          names={["Uday Krishna Reddy", "Dharani Sevireddy"]}
        />
        <h4 style={{ textAlign: "center" }}>Junior EB</h4>
        <TeamMembers members={teamMembers} />
      </section>
      <section className="core-team-section" id="events" style={{ backgroundColor: '#ffc0c0', minHeight: '100vh' }}>
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="Robotics and Automation Society" />
      </section>
      <Footer />
    </div>
  );
};

export default RoboticsAutomationSociety;
