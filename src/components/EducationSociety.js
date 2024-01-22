import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";
const EducationSociety = ({ imgs, num }) => {
  const team=[{
    name:"N. Puneeth Sarma",
    img:"images/es_chair.jpg",
    position:"Chairperson"},
  {
    name:"Manav Damani",
    img:"images/es_vice.jpg",
    position:"Vice Chair"
  }]
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Education Society</h2>
        <Carousel val="x" type="es"  ie="n" num={1} />
        <p className="section-description">
        The IEEE Education Society is a specialized division within the Institute of Electrical and Electronics Engineers (IEEE) 
        with a primary focus on advancing education and training in the fields of electrical and computer engineering, as well 
        as computer science. Committed to fostering the exchange of knowledge and ideas among educators, researchers, and 
        professionals, the society plays a vital role in shaping the landscape of engineering education. Through various 
        publications, including journals and magazines, the IEEE Education Society disseminates research findings, 
        case studies, and reviews to contribute to the ongoing dialogue in the realm of engineering education. 
        Additionally, the society organizes conferences, workshops, and events, serving as platforms for professionals 
        and researchers to showcase their work and engage in discussions. Active involvement in the development and maintenance 
        of educational standards and offering membership opportunities further solidify the IEEE Education Society's role in 
        shaping the future of electrical and computer engineering education.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Education Society's Team.
        </p>
        <CoreTeam members={team} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="education society"/>
      </section>
      <Footer />
    </div>
  );
};

export default EducationSociety;