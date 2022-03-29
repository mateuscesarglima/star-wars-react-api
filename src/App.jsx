import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";
import Species from "./components/pages/Species";
import Starships from "./components/pages/Starships";
import Vehicles from "./components/pages/Vehicles";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/people" element={<People />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/species" element={<Species />} />
        <Route exact path="/starships" element={<Starships />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
