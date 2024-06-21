import React from "react";

const TeamMembers = ({ members }) => {
  return (
    <div className="team-members">
      {members.map((member, index) => (
        <div key={index} className="team-member">
          <p>{member.name} - {member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;

