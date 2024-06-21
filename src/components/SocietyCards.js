import React from "react";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
const SocietyCards = () => {
  return (
    <Row xs={1} md={2} lg={3} className="justify-content-center">
      {/* Repeat the following block for each society */}
      <Cards
        img="images/com_soc.jpg"
        societyName="Computer Society"
        description="Dive into the future of computing "
        link="computer-society"
      />
      <Cards
        img="images/sig_soc.jpg"
        societyName="Signal Processing Society"
        description="Unveil the hidden world within signals"
        link="signal-processing-society"
      />
      <Cards
        img="images/c_n_s.jpg"
        societyName="Circuits and Systems Society"
        description="Building the future, one circuit at a time"
        link="circuits-systems-society"
      />
      <Cards
        img="images/robo_soc.jpg"
        societyName="Robotics and Automation Society"
        description="Innovation at the intersection of robotics"
        link="robotics-automation-society"
      />
      <Cards
        img="images/won_soc.jpg"
        societyName="Women in Engineering Society"
        description="Empowering Women to engineer the future"
        link="women-engineering-society"
      />

      <Cards
        img="images/edu_soc.jpg"
        societyName="Education Society"
        description="Igniting a passion for STEM education"
        link="education-society"
      />
      <Cards
        img="images/pow_soc.jpg"
        societyName="Power and Energy Society"
        description=" Shaping a sustainable future through power systems and energy innovation"
        link="power-energy-society"
      />
      {/* Repeat the block above for each society */}
    </Row>
  );
};

export default SocietyCards;
