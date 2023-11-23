import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./PageNotFound";
import ComputerSociety from "./ComputerSociety";
import SignalProcessingSociety from "./SignalProcessingSociety";
import CircuitsAndSystemsSociety from "./CircuitsAndSystemsSociety";
import RoboticsAutomationSociety from "./RoboticsAutomationSociety";
import WomenEngineeringSociety from "./WomenEngineeringSociety";
import EducationSociety from "./EducationSociety";
import PowerEnergySociety from "./PowerEnergySociety";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="computer-society"
          element={
            <ComputerSociety imgs={["tem.jpg", "image1.jpeg"]} num="9" />
          }
        />
        <Route
          path="signal-processing-society"
          element={<SignalProcessingSociety num="7" />}
        />
        <Route
          path="circuits-systems-society"
          element={<CircuitsAndSystemsSociety />}
        />
        <Route
          path="robotics-automation-society"
          element={<RoboticsAutomationSociety />}
        />
        <Route
          path="women-engineering-society"
          element={<WomenEngineeringSociety />}
        />
        <Route path="education-society" element={<EducationSociety />} />
        <Route path="power-energy-society" element={<PowerEnergySociety />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Carousel from "./Carousel";
// import CoreTeam from "./CoreTeam";
// import NavBar from "./NavBar";
// import SocietyCards from "./SocietyCards";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="app-container">
//       <NavBar />
//       <div className="section">
//         <Carousel />
//       </div>
//       <div className="section" id="societies">
//         <h2 className="section-heading">Societies</h2>
//         <SocietyCards />
//         <hr className="section-divider" />
//       </div>
//       <div className="section" id="coreteam">
//         <h2 className="section-heading">Core Team</h2>
//         <CoreTeam />
//         <hr className="section-divider" />
//       </div>
//     </div>
//   );
// }

// export default App;
