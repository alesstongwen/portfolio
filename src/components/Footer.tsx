import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">
          &copy; 2025 Aless Wei. All Rights Reserved.
        </p>

        {/* Social media links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/alesstongwen"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aless-wei/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
