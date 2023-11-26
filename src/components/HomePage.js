import ImageCarousel from "./Carousel";
// import CoreTeam from "./CoreTeam";
import NavBar from "./NavBar";
import SocietyCards from "./SocietyCards";
import Footer from "./Footer";
import Events from "./Events";
import TeamCarousel from "./TeamCarousel";
export default function HomePage() {
  //   const [showWelcome, setShowWelcome] = useState(true);

  //   useEffect(() => {
  //     // Set a timer to hide the welcome message after a certain duration
  //     const timer = setTimeout(() => {
  //       setShowWelcome(false);
  //     }, 500); // Adjust the duration as needed

  //     return () => clearTimeout(timer); // Clear the timer on component unmount
  //   }, []);

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
          <ImageCarousel />
        </div>
        <p
          className="section-description section-divider"
          style={{ padding: "10px" }}
          id="about"
        >
          <h1 style={{ textAlign: "center" }}>IEEE CBIT</h1>
          Sure. Here are small descriptions of the following societies which are
          part of the IEEE club: Computer Society Computer Society logoOpens in
          a new window www.computer.org Computer Society logo The Computer
          Society (CS) is the world's largest professional organization
          dedicated to advancing technology for the benefit of humanity. It has
          over 100,000 members in 180 countries around the world. The CS
          provides resources and opportunities for professionals in the
          computing field, including conferences, publications, and educational
          programs. It also advocates for the responsible use of technology and
          promotes diversity and inclusion in the computing field.
        </p>
        <div className="section" id="societies">
          <h2 className="section-heading">Societies</h2>
          <SocietyCards />
          <hr className="section-divider" />
        </div>
        <div className="section" id="coreteam">
          <h2 className="section-heading">Core Team</h2>
          {/* <CoreTeam num="5" /> */}
          <TeamCarousel />
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
