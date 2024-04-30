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
        <NavBar itemId="societies" itemName="Socities" teamType="CoreTeam" />
        <div className="section" id="home">
          <ImageCarousel className="ImageCarousel" />
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
          <h1 style={{ textAlign: "center" }}>IEEE CBIT</h1>
          The CBIT Institute of Electrical and Electronics Engineers (IEEE)
          Student Chapter is a vibrant community empowering your engineering
          journey. Affiliated with the world's largest professional technology
          organization, we provide a platform to deepen knowledge through
          workshops and guest lectures, sharpen skills with hands-on
          experiences, network and collaborate with industry professionals,
          prepare for the future with career guidance, and compete on a broader
          stage. Membership unlocks exclusive benefits, workshops, hackathons,
          networking events, scholarships, and leadership opportunities. Led by
          a passionate student team and supported by faculty advisors, we offer
          a stimulating environment to explore interests, hone skills, and
          prepare for a successful tech career
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
