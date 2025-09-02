import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Works from "./routes/works";
import './css/style.scss'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
