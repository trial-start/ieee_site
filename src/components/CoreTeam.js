import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";
import { NavLink } from "react-router-dom";

const CoreTeam = ({ num = "2", folder = "empty", names = ["", ""] }) => {
  const members = Array.from({ length: num }, (_, index) => index + 1);
  console.log(members);
  const pos = ["President", "Vice President"];
  return (
    <Row className="custom-disp">
      {members.map((index) => (
        <Member
          key={index}
          img={`./images/${folder}/img${index - 1}.jpg`}
          name={`${names[index - 1]}`}
          description={`${pos[index - 1]}`}
        />
      ))}
    </Row>
  );
};

export default CoreTeam;
