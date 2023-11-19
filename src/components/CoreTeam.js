import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";

const CoreTeam = ({num="5"}) => {
  const members = Array.from({ length:num }, (_, index) => index + 1);
  console.log(members)

  return (
    <Row>
  {members.map((index) => (
        <Member
          key={index}
          img={`https://via.placeholder.com/100x100`}
          name={`Member ${index}`}
          description={`Position ${index}`}
        />
      ))}
    </Row>
  );
};

export default CoreTeam;
