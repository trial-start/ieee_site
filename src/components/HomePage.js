import ImageCarousel from "./Carousel";
import CoreTeam from "./CoreTeam";
import NavBar from "./NavBar";
import SocietyCards from "./SocietyCards";
import Footer from "./Footer";
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
        <NavBar />
        <div className="section">
          <ImageCarousel />
        </div>
        <div className="section" id="societies">
          <h2 className="section-heading">Societies</h2>
          <SocietyCards />
          <hr className="section-divider" />
        </div>
        <div className="section" id="coreteam">
          <h2 className="section-heading">Core Team</h2>
          <CoreTeam />
          <hr className="section-divider" />
        </div>

        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
