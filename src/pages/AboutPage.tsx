import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fefaf6] py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <p className="text-lg max-w-4xl mx-auto text-center mb-6">
        I’m Aless, a full-stack developer and passionate photographer. I thrive
        on creating beautiful digital experiences while capturing the world
        through my lens.
      </p>
      <div className="text-center">
        <a href="/" className="text-blue-600 underline">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
