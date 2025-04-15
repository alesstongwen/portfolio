import React from "react";

const BloomPage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold mb-8">Bloom</h1>
          <div className="flex justify-center mb-10">
            <img
              src="/assets/Bloom-project.png"
              alt="Beep App"
              className="rounded-xl w-full max-w-[90vw] object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="mt-4">
              Bloom is a social media app that creates community for people
              based on their aura color. Users can take a quiz to determine
              their aura color and then join a community of people with the same
              aura color. Users can post, comment, and like posts within their
              community as well as events. The project was built with Christy
              Wan, Emmy Nguyen, and Ademi Ordobaeva.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">Watch Bloom Demo</h2>
            <div className="mt-4 flex justify-left">
              <iframe
                className="w-full max-w-[560px] h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/jUkVIrlrPBw?si=5MqicPTbf9skxyP3"
                title="Bloom Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Reflection */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Challenges & Reflection</h2>
            <p className="mt-4">
              Through this project, I significantly improved my Figma skills,
              from building interactive prototypes to organizing scalable design
              systems. More importantly, it helped me think more deeply about
              how thoughtful design translates into better development. As a
              developer, this experience strengthened my ability to interpret
              design decisions, communicate across disciplines, and build with
              greater empathy and intention.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">
              Developer Value from a Design-Only Project
            </h2>
            <p className="mt-4">
              Although Bloom was a design-focused project, it significantly
              strengthened my abilities as a developer. Working through user
              testing, information architecture, and wireframe iteration helped
              me internalize the "why" behind the code — not just how to build
              something, but how to ensure it aligns with user expectations and
              solves a real problem.
            </p>
            <p className="mt-4">
              Through this project, I developed a user-first mindset, which now
              informs my development process. I better understand how to
              interpret Figma files, collaborate more effectively with
              designers, and ask the right questions about usability,
              accessibility, and interaction flow.
            </p>
            <p className="mt-4">
              Additionally, building wireframes and interactive prototypes
              deepened my appreciation for frontend logic and UI/UX
              micro-interactions — giving me insight into the kinds of code I’d
              need to bring those designs to life with tools like React,
              Tailwind, or Framer Motion.
            </p>
            <p className="mt-4">
              By bridging design and dev, I’ve become a more empathetic and
              collaborative full-stack developer who can translate vision into
              usable features with more precision and intention.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BloomPage;
