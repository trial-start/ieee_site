// In your TeamMembers.js component:
import React from "react";

const TeamMembers = ({ members }) => {
  // Split members into left and right columns
  const leftColumn = members.slice(0, Math.ceil(members.length / 2));
  const rightColumn = members.slice(Math.ceil(members.length / 2));

  return (
    <div className="team-members-grid">
      <div className="team-column">
        {leftColumn.map((member, index) => (
          <div key={index} className="team-member">
            <p>{member.name} - {member.position}</p>
          </div>
        ))}
      </div>
      <div className="team-column">
        {rightColumn.map((member, index) => (
          <div key={index} className="team-member">
            <p>{member.name} - {member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;