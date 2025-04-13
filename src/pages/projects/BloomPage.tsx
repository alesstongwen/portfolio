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
              Bloom was a fun project to work and an eye-opening experience for
              me becuase we did the user testing, flow, and wireframes all in 3
              weeks. My skill of how to use Figma to create wireframes and
              prototypes has improved a lot after this project.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BloomPage;
