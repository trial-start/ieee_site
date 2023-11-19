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
        description="Description of Society"
        link="computer-society"
      />
      <Cards
        img="images/sig_soc.jpg"
        societyName="Signal Processing Society"
        description="Description of Society"
        link="signal-processing-society"
      />
      <Cards
        img="images/c_n_s.jpg"
        societyName="Circuits and Systems Society"
        description="Description of Society"
        link="circuits-systems-society"
      />
      <Cards
        img="images/robo_soc.jpg"
        societyName="Robotics and Automation Society"
        description="Description of Society"
        link="robotics-automation-society"
      />
      <Cards
        img="images/won_soc.jpg"
        societyName="women in engineering Society"
        description="Description of Society"
        link="women-engineering-society"
      />

      <Cards
        img="images/edu_soc.jpg"
        societyName="Education Society"
        description="Description of Society"
        link='education-society'
      />
      <Cards
        img="images/pow_soc.jpg"
        societyName="Power and Energy Society"
        description="Description of Society"
        link='power-energy-society'
      />
      {/* Repeat the block above for each society */}
    </Row>
  );
};

export default SocietyCards;
