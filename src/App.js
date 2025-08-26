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
        <Route path="/crosswork/" element={<Home />} />
        <Route path="/crosswork/about" element={<About />} />
        <Route path="/crosswork/works" element={<Works />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
