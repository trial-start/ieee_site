import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";

const CoreTeam = ({ num = "2" }) => {
  const members = Array.from({ length: num }, (_, index) => index + 1);
  console.log(members);

  return (
    <Row className="custom-disp">
      {members.map((index) => (
        <Member
          key={index}
          img={`images/ckts/img${index - 1}.jpg`}
          name={`Member ${index}`}
          description={`Position ${index}`}
        />
      ))}
    </Row>
  );
};

export default CoreTeam;
