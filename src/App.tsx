// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import BeepPage from "./pages/projects/BeepPage";
import ChezMariPage from "./pages/projects/ChezMariPage";
import PhotographyPage from "./pages/PhotographyPage";
import BloomPage from "./pages/projects/BloomPage";
import DevPortfolioCMS from "./pages/projects/DevPortfolioCMSPage";
import JobApplicationTrackerPage from "./pages/projects/job-application-trackerPage";
import ProjectPage from "./pages/ProjectPage";
import MakeupProductReviewPage from "./pages/projects/Makeup-Product-ReviewPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/beep" element={<BeepPage />} />
        <Route path="/projects/chezmari" element={<ChezMariPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/projects/bloom" element={<BloomPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/projects/makeup-product-review"
          element={<MakeupProductReviewPage />}
        />
        <Route
          path="/projects/job-application-tracker"
          element={<JobApplicationTrackerPage />}
        />
        <Route
          path="/projects/dev-portfolio-CMS"
          element={<DevPortfolioCMS />}
        />
      </Routes>
    </Router>
  );
};

export default App;
