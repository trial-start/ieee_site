import ImageCarousel from "./Homecarousel";
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
  //     // Set a timer to hide the welcome message after a certain duration
  //     const timer = setTimeout(() => {
  //       setShowWelcome(false);
  //     }, 500); // Adjust the duration as needed

  //     return () => clearTimeout(timer); // Clear the timer on component unmount
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
          <ImageCarousel className="ImageCarousel" />
        </div>
        <p
          className="section-description section-divider"
          style={{ padding: "10px", fontFamily: "Helvetica, sans-serif", textAlign:"justify" }}
          id="about"
        >
          <h1 style={{ textAlign: "center" }}>IEEE CBIT</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the IEEE CBIT Student Chapter, a pioneering club at Chaitanya Bharathi Institute of Technology (CBIT). As one of the oldest clubs at CBIT, the IEEE CBIT is a student branch affiliated with IEEE, providing a platform for students to engage with technology, conduct events, seminars, webinars and network with professionals. With a rich history, we annually host events like Robovanza during Sudhee, Master Classes, and other events engaging students in cutting-edge technologies. We also conduct Membership Drives every year to recruit dedicated students for being the part of IEEE CBIT Student Branch.<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IEEE CBIT comprises seven specialized societies, each focused on specific areas of engineering and technology.
          The seven societies within IEEE CBIT are:         
          Computer Society, Robotics and Automation Society, Education Society, Circuits and Systems Society, Power and Energy Society, Signal Processing Society, and Women in Engineering Society.
          Being part of this club allows students to consistently stay informed about the latest developments in their field and build valuable skills for their future careers.
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
            {slideIndex < 4 ? "Core Team" : "Executive Board"}
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
