import React from "react";
import NavBar from "./NavBar";
import Csocteam2 from "./Csocteam2";
import Footer from "./Footer";
import Cscarousel from "./Cscarousel";

import ComputerSocietyEvents from "./ComputerSocietyEvents";

const ComputerSociety = ({ imgs, num }) => {
const carouselImages = [
    "./csoc1.jpg",
    "./csoc2.jpg",
  ];
  const coreTeamMembers = [
    { name: "P. Abhiram", position: "President", img: "prescs.jpg" },
    { name: "Sai Teja Veldoj", position: "Vice President", img: "vicecs.jpg" },]
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h1 className="section-heading" style={{textAlign:"center", fontWeight:"bolder"}}>Computer Society</h1>
        
        <Cscarousel val="x" imgs={carouselImages} />
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description" style={{ textAlign: "justify" }}>
        The Computer Society (CS) stands as the world's largest professional organization 
        committed to advancing technology for the betterment of humanity. With a global 
        membership exceeding 100,000 across 180 countries, CS provides invaluable resources 
        and opportunities for professionals in the computing field. Through conferences, publications, 
        and educational programs, CS champions the responsible use of technology and advocates for diversity 
        and inclusion within the computing industry. Additionally, CS fosters a collaborative 
        environment, facilitating knowledge exchange and networking among its members. 
        The society plays a pivotal role in shaping industry standards, ensuring the highest 
        quality in computing practices. Moreover, CS remains at the forefront of technological 
        innovation, driving advancements in areas such as artificial intelligence, cybersecurity, 
        and data science. Overall, the Computer Society is a dynamic hub for technology 
        professionals, promoting excellence, inclusivity, and the ethical use of 
        cutting-edge technologies.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Computer Society's Team.
        </p>
        {/* <CoreTeam names = {["P. Abhiram", "Sai Teja Veldoj"]} positions = {["President", "Vice President"] }/> */}
        {/* <CoreTeam
  members={[
    { name: "P. Abhiram", position: "President", img: "prescs.jpg" },
    { name: "Sai Teja Veldoj", position: "Vice President", img: "vicecs.jpg" }
    // Add more members as needed
  ]}
/> */}
      <Csocteam2 members={coreTeamMembers} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <ComputerSocietyEvents />
      </section>
      <Footer />
    </div>
  );
};

export default ComputerSociety;
