import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Art from "./Pages/Art";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="art" element={<Art />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
