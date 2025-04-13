// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage"; // Import HomePage component
import BeepPage from "./pages/projects/BeepPage"; // Import individual project pages
import ChezMariPage from "./pages/projects/ChezMariPage";
import PhotographyPage from "./pages/PhotographyPage";
import BloomPage from "./pages/projects/BloomPage";
import AIWorkoutGuidePage from "./pages/projects/AI-workout-GuidePage";
import JobApplicationTrackerPage from "./pages/projects/job-application-trackerPage";
import ProjectPage from "./pages/ProjectPage";
import MakeupProductReviewPage from "./pages/projects/Makeup-Product-ReviewPage";

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
        <Route
          path="/projects/makeup-product-review"
          element={<MakeupProductReviewPage />}
        />
        <Route
          path="/projects/job-application-tracker"
          element={<JobApplicationTrackerPage />}
        />
        <Route
          path="/projects/ai-workout-guide"
          element={<AIWorkoutGuidePage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
