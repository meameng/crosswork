import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Works from "./routes/works";
import './css/default.css'
import './css/common.scss'

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

    <div>나옴??</div>
    </div>
  );
}

export default App;
