import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";

const CoreTeam = ({ num = "2" , positions,names}) => {
  const members = Array.from({ length: num }, (_, index) => index + 1);
  console.log(members);

  return (
    <Row className="custom-disp">
      {members.map((index) => (
        <Member
          key={index}
          img={`images/ras-team/ras${index - 1}.jpg`}
          name={`${names[index-1]}`}
          description={`${positions[index-1]}`}
        />
      ))}
    </Row>
  );
};

export default CoreTeam;
