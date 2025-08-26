import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Works from "./routes/works";
import './css/style.scss'

function App() {
  return (
    <div className="wrapper">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
