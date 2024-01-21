import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";

const Csocteam2 = ({ names = ["P. Abhiram", "Sai Teja Veldoj"], positions = ["President", "Vice President"] }) => {
  return (
    <Row className="custom-disp">
      {names.map((name, index) => (
        <Member
          key={index}
          img={`images/${name.toLowerCase()}.jpg`}
          name={name}
          description={`Position: ${positions[index]}`}
        />
      ))}
    </Row>
  );
};

export default Csocteam2;