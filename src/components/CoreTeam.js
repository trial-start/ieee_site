import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";
const CoreTeam = ({ num = 2, members = [] }) => {
  
  const defaultMembers = Array.from({ length: num }, (_, index) => ({
    name: `Member ${index + 1}`,
    img: `images/default-img.jpg`,
    position: `Position ${index + 1}`,
  }));

  
  const teamMembers = members.length > 0 ? members : defaultMembers;

  return (
    <Row className="custom-disp">
      {teamMembers.map((member, index) => (
        <Member
          key={index}
          img={member.img}
          name={member.name}
          description={member.position}
        />
      ))}
    </Row>
  );
};

export default CoreTeam;