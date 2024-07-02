import ImageCarousel from "./Carousel";
// import CoreTeam from "./CoreTeam";
import NavBar from "./NavBar";
import SocietyCards from "./SocietyCards";
import Footer from "./Footer";
import Events from "./Events";
import TeamCarousel from "./TeamCarousel";
import { useState } from "react";
// import { useNavigation } from "react-router-dom";
// import Spinner from "./Spinner";
export default function HomePage() {
  //   const [showWelcome, setShowWelcome] = useState(true);

  //   useEffect(() => {
  //
  //     const timer = setTimeout(() => {
  //       setShowWelcome(false);
  //     }, 500); // Adjust the duration as needed

  //     return () => clearTimeout(timer);
  //   }, []);
  const [slideIndex, setSlideIndex] = useState(0);
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <div className="app-container">
      {/* {showWelcome ? (
        <div className="welcome-message">
          <h1 className="welcome-heading">Welcome to IEEE CBIT</h1>
        </div>
      ) : ( */}
      <>
        <NavBar itemId="societies" itemName="Societies" teamType="CoreTeam" />
        <div className="section" id="home">
          <ImageCarousel className="ImageCarousel" slideIndex={slideIndex} />
        </div>
        <p
          className="section-description section-divider"
          // style={{ padding: "10px", fontFamily: "Helvetica, sans-serif" }}
          style={{
            padding: "10px",
            fontFamily: "Helvetica, sans-serif",
            textAlign: "justify",
            fontSize: "18px",
          }}
          id="about"
        >
          <h1 style={{ textAlign: "center", color: '#0118ab' }}>IEEE CBIT</h1>
          The IEEE CBIT Student Chapter at Chaitanya Bharathi Institute of Technology is a pioneering club and student branch affiliated with IEEE. It provides a platform for students to engage with technology, conducts events, seminars, and webinars, and network with professionals. The club hosts events like Robovanza, Masterclasses, Membership Drives and many more every year. Being part of this club allows students to stay updated on the latest developments in the technical and research fields. Led by a passionate student team and supported by faculty advisors, we offer a stimulating environment to explore interests, hone skills, and prepare for a successful tech career.<br/> 
          IEEE CBIT comprises seven specialized societies, each focused on specific areas of engineering and technology, including the Circuits and Systems Society, Computer Society, Education Society, Power and Energy Society, Robotics and Automation Society, Signal Processing Society, and Women in Engineering Society.
        </p>
        <div className="section" id="societies">
          <h2 className="section-heading">Societies</h2>
          <SocietyCards />
          <hr className="section-divider" />
        </div>
        {/* <div className="section" id="coreteam">
          <h2 className="section-heading">Core</h2>
          <TeamCarousel />
          <hr className="section-divider" />
        </div> */}
        <div className="section" id="coreteam">
          <h2 className="section-heading">
            {"IEEE Senior Executive Board 2023-2024"}
          </h2>
          <TeamCarousel onSlideChange={setSlideIndex} />
          <hr className="section-divider" />
        </div>

        <div className="section" id="events">
          <h2 className="section-heading">Events</h2>
          <Events />
          <hr className="section-divider" />
        </div>

        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
