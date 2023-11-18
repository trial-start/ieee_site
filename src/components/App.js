import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ComputerSociety from "./ComputerSociety";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="computer-society" element={<ComputerSociety />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import ImageCarousel from "./Carousel";
// import CoreTeam from "./CoreTeam";
// import NavBar from "./NavBar";
// import SocietyCards from "./SocietyCards";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="app-container">
//       <NavBar />
//       <div className="section">
//         <ImageCarousel />
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
