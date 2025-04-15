import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fefaf6] py-16 px-4 flex flex-col items-center text-center">
      <h1
        className="text-4xl font-extrabold mb-6"
        style={{ color: "#6F4634", fontFamily: "Tan Nimbus" }}
      >
        Let’s Connect
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-10">
        Whether you’re reaching out for collaboration, job opportunities, or
        just to say hi — I’d love to hear from you!
      </p>

      {/* Contact Info */}
      <div className="space-y-6 text-gray-800">
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

      {/* Optional CTA Button */}
      <div className="mt-12">
        <a
          href="mailto:aless@example.com"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Send Me a Message
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
