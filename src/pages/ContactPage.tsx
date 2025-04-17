import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/HomeBanner.svg')",
          opacity: 0.2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1
          className="text-4xl font-extrabold mb-6"
          style={{ color: "#6F4634", fontFamily: "Tan Nimbus" }}
        >
          Let’s Connect
        </h1>
        <p className="text-lg mb-10" style={{ color: "#3B2E27" }}>
          Whether you’re reaching out for collaboration, job opportunities, or
          just to say hi — I’d love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="mb-12 flex justify-center gap-6">
          <p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a
                  href="https://github.com/alesstongwen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6F4634] text-2xl hover:opacity-80"
                >
                  {FaGithub({ className: "text-3xl" })}
                </a>
                <a
                  href="https://linkedin.com/in/aless-wei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6F4634] text-2xl hover:opacity-80"
                >
                  {FaLinkedin({ className: "text-3xl" })}
                </a>
              </div>
            </div>
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:alesstongwen@gmail.com"
          className="inline-block bg-[#6F4634] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#5a372a] transition-colors"
        >
          Send Me a Message
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
