import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";
import TeamMembers from "./TeamMembers";

const ComputerSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "ANUMULA SRI HASINI", position: "Documentation" },
    { name: "GUBBALA MANI VARSHA", position: "Tech" },
    { name: "VENKATA SHASHANK", position: "Tech" },
    { name: "SRIKAR ACHARYA", position: "Tech" },
    { name: "HARSHA KUMAR", position: "Design" },
    { name: "NIKHIL HAZARI", position: "Design" },
    { name: "P.S.MAYOOR", position: "Tech" },
    { name: "PRAGALLAPATI SAKETH", position: "Tech" },
    { name: "PULLAYI THRISHA", position: "Tech" },
    { name: "RUSHIL SARAPU", position: "SM & PR" },
    { name: "SAKETH VEMULAPATI", position: "SM & PR" },
    { name: "SHASHIDHAR NAGUNURI", position: "Tech" },
    { name: "TEJASREE JILLA", position: "SM & PR" },
    { name: "VISHNU VARDHAN", position: "SM & PR" },
  ];

  return (
    <div style={{ backgroundColor: 'rgb(243, 237, 177)', minHeight: '100vh' }}>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about" style={{ textAlign: "center", backgroundColor: 'rgb(243, 237, 177)' }}>
        <h2 className="section-heading">Computer Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description" style={{textAlign: 'justify'}}>
          Aligned with the world's leading IEEE Computer Society, the CBIT
          IEEE's CS branch empowers your exploration of computing. Delve into a
          vast array of topics, from fundamentals to cutting-edge AI and Machine
          Learning. Access valuable IEEE CS publications, network with
          professionals, and participate in workshops and hackathons. Gain
          career guidance, mentorship, and leadership opportunities. Join our
          passionate community and embark on a transformative journey in
          computing!
        </p>
      </section>
      <section className="core-team-section" id="coreteam" style={{ textAlign: "center", backgroundColor: 'rgb(243, 237, 177)' }}>
        <h2 className="section-heading" style={{ textAlign: "center", backgroundColor: 'rgb(243, 237, 177)' }}>
          Team 2024-2025
        </h2>
        <p className="section-description" style={{ textAlign: "center", backgroundColor: 'rgb(243, 237, 177)' }}>
          Meet the dedicated members of our Computer Society's Team
        </p>
        <CoreTeam
          style={{ backgroundColor: 'rgb(243, 237, 177)' }}
          num={num}
          folder="cs"
          names={["P.Abhiram", "Saiteja Veldoj"]}
        />
        <h4 style={{ textAlign: "center", backgroundColor: 'rgb(243, 237, 177)' }}>Junior EB</h4>
        <TeamMembers members={teamMembers} style={{ textAlign: "center", backgroundColor: 'rgb(243, 237, 177)' }} />
      </section>
      <section className="core-team-section" id="events" style={{ backgroundColor: 'rgb(243, 237, 177)' }}>
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="Computer Society" />
      </section>
      <Footer style={{ backgroundColor: 'rgb(243, 237, 177)' }} />
    </div>
  );
};

export default ComputerSociety;





// import React from "react";
// import NavBar from "./NavBar";
// import CoreTeam from "./CoreTeam";
// import Footer from "./Footer";
// import Carousel from "./Carousel";
// import Events from "./Events";
// import TeamMembers from "./TeamMembers";

// const ComputerSociety = ({ imgs, num }) => {
//   const teamMembers = [
//     { name: "Swaroop", position: "Documentation" },
//     { name: "Saketh", position: "Tech" },
//     { name: "Akshitha", position: "Tech" },
//     { name: "Sreesha", position: "Tech" },
//     { name: "Sneha", position: "Design" },
//     { name: "Parnita", position: "Design" },
//     { name: "Chinmayee", position: "Design" },
//     { name: "Koushik", position: "SM & PR" },
//     { name: "Snikitha", position: "SM & PR" },
//   ];

//   return (
//     <div style={{ backgroundColor: 'rgb(243, 237, 177)', minHeight: '100vh' }}>
//       <NavBar itemId="about" itemName="About" teamType="Team" />
//       <section className="society-section" id="about">
//         <h2 className="section-heading">Computer Society</h2>
//         <Carousel val="x" imgs={imgs} />
//         <p className="section-description">
//           Aligned with the world's leading IEEE Computer Society, the CBIT
//           IEEE's CS branch empowers your exploration of computing. Delve into a
//           vast array of topics, from fundamentals to cutting-edge AI and Machine
//           Learning. Access valuable IEEE CS publications, network with
//           professionals, and participate in workshops and hackathons. Gain
//           career guidance, mentorship, and leadership opportunities. Join our
//           passionate community and embark on a transformative journey in
//           computing!
//         </p>
//       </section>
//       <section className="core-team-section" id="coreteam">
//         <h2 className="section-heading" style={{ textAlign: "center" }}>
//           Team 2023-2024
//         </h2>
//         <p className="section-description" style={{ textAlign: "center" }}>
//           Meet the dedicated members of our Computer Society's Team
//         </p>
//         <CoreTeam
//           style={{backgroundColour :'rgb(243, 237, 177)'}}
//           num={num}
//           folder="cs"
//           names={["P.Abhiram", "Saiteja Veldoj"]}
//         />
//         <h4 style={{ textAlign: "center" }}>Junior EB</h4>
//         <TeamMembers members={teamMembers} />
//       </section>
//       <section className="core-team-section" id="events">
//         <h2 className="section-heading">Events</h2>
//         <p className="section-description">Check out our past events.</p>
//         <Events by="Computer Society" />
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default ComputerSociety;

// import React from "react";
// import NavBar from "./NavBar";
// import CoreTeam from "./CoreTeam";
// import Footer from "./Footer";
// import Carousel from "./Carousel";
// import Events from "./Events";

// const ComputerSociety = ({ imgs, num }) => {
//   return (
//     <div>
//       <NavBar itemId="about" itemName="About" teamType="Team" />
//       <section className="society-section" id="about">
//         <h2 className="section-heading">Computer Society</h2>
//         <Carousel val="x" imgs={imgs} />
//         <p className="section-description">
//           Aligned with the world's leading IEEE Computer Society, the CBIT
//           IEEE's CS branch empowers your exploration of computing. Delve into a
//           vast array of topics, from fundamentals to cutting-edge AI and Machine
//           Learning. Access valuable IEEE CS publications, network with
//           professionals, and participate in workshops and hackathons. Gain
//           career guidance, mentorship, and leadership opportunities. Join our
//           passionate community and embark on a transformative journey in
//           computing!
//         </p>
//       </section>
//       <section className="core-team-section" id="coreteam">
//         <h2 className="section-heading">Team</h2>
//         <p className="section-description">
//           Meet the dedicated members of our Computer Society's Team.
//         </p>
//         <CoreTeam
//           num={num}
//           folder="cs"
//           names={["P.Abhiram", "Saiteja Veldoj"]}
//         />
//       </section>
//       <section className="core-team-section" id="events">
//         <h2 className="section-heading">Events</h2>
//         <p className="section-description">Check out our past events.</p>
//         <Events by="computer society" />
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default ComputerSociety;
