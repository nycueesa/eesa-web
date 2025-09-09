import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx"
import "./App.css"

export default function App() {
  return (
    <div className="main-page">
      <nav className="main-nav-bar">
        <Link to="/">首頁</Link> |{" "}
        {/* <Link to="/about">關於</Link> |{" "}
        <Link to="/contact">聯絡</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}