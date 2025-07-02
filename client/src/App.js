
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FruitPage from "./pages/FruitPage";
import FlowerPage from "./pages/FlowerPage";
import ComparePage from "./pages/ComparePage";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruit/:name" element={<FruitPage />} />
            <Route path="/flower/:name" element={<FlowerPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
