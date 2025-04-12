// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage"; // Import HomePage component
import BeepPage from "./pages/projects/BeepPage"; // Import individual project pages
import ChezMariPage from "./pages/projects/ChezMariPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/beep" element={<BeepPage />} />
        <Route path="/projects/chezmari" element={<ChezMariPage />} />
      </Routes>
    </Router>
  );
};

export default App;
