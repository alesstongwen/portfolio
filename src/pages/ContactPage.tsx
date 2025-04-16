import React from "react";

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
        <div className="space-y-6 text-gray-800 mb-12">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:alesstongwen@gmail.com"
              className="text-blue-600 underline"
            >
              alesstongwen@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/aless-wei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              linkedin.com/in/aless-wei
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/alesstongwen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              github.com/alesstongwen
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:alesstongwen@gmail.com"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Send Me a Message
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
