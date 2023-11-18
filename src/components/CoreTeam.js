import React from "react";
import { Row } from "react-bootstrap";
import Member from "./Member";

const CoreTeam = () => {
  return (
    <Row>
      {/* Repeat the following block for each core team member */}
      <Member
        img="https://via.placeholder.com/100x100"
        name="member 1"
        description="President"
      />
      <Member
        img="https://via.placeholder.com/100x100"
        name="member 2"
        description="Vice-President"
      />
      <Member
        img="https://via.placeholder.com/100x100"
        name="member 3"
        description="General Secretary"
      />
      <Member
        img="https://via.placeholder.com/100x100"
        name="member 4"
        description="Joint Secretary"
      />
      <Member
        img="https://via.placeholder.com/100x100"
        name="member 5"
        description="Treasurer"
      />

      {/* Repeat the block above for each core team member */}
    </Row>
  );
};

export default CoreTeam;
