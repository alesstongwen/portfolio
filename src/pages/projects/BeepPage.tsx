import React from "react";

const BeepPage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold mb-8">Beep</h1>
          <div className="flex justify-center mb-10">
            <img
              src="/assets/Beep-banner.png"
              alt="Beep App"
              className="rounded-xl w-full max-w-[90vw] object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="mt-4">
              Beep is a safety app that provides real-time safety insights and
              proactive emergency features to offer peace of mind, especially
              for women, people of color, and underrepresented communities
              navigating alone. The project was a collaboration with the D3
              (Digital Design and Development) program and won 3rd place in the
              final showcase among 9 other teams.
            </p>
          </div>
          {/* YouTube Video Embed */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Watch the Beep App in Action</h2>
            <div className="mt-4 flex justify-left">
              <iframe
                className="w-full max-w-[560px] h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/GoaUL_IReU8"
                title="Beep App Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <ul className="mt-4 list-disc pl-6">
              <li>
                Real-Time Location Sharing: Allows users to share their live
                location with trusted contacts.
              </li>
              <li>
                Emergency Alerts: Enables an audible alarm for immediate
                assistance in emergency situations.
              </li>
              <li>
                Crime Data Mapping: Shows local crime data to help users plan
                safer routes.
              </li>
              <li>
                Surroundings Recording: Captures audio, photos, or video for
                added security and evidence if needed.
              </li>
              <br />
              <p>
                These features embody Beep’s core values of Assurance,
                Simplified Safety, and Trust & Transparency.
              </p>
            </ul>
          </div>

          {/* Challenges */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Challenges & Reflection</h2>
            <p className="mt-4">
              Working with students from a different program and campus was a
              unique challenge. Since our entire team could only meet once a
              week, coordinating across schedules and communication styles
              required extra effort. Unlike our previous projects—where everyone
              shared the same developer background—we had to collaborate with
              teammates who had different skill sets and perspectives. This
              experience felt very realistic to what it’s like in the industry,
              where cross-functional teamwork is the norm. I learned how to
              communicate more effectively with non-developers and align our
              goals to move the project forward together.
            </p>
            <p className="mt-4">
              Working with React Native and building a mobile app for the first
              time was both exciting and challenging. It was a completely new
              experience that pushed me to think beyond the traditional web
              development environment. I learned how to use React Native's
              component-based structure to create a consistent mobile UI. One of
              the most valuable parts of this project was learning how to
              integrate Firebase for real-time location tracking, which allowed
              users to share their live location with trusted contacts. I also
              explored how to connect multiple APIs, such as for SMS and device
              permissions, to implement features like text message alerts and
              automated emergency notifications. This experience helped me gain
              confidence in cross-platform development and strengthened my
              ability to build responsive, real-world mobile applications.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold">View More</h2>
            <div className="mt-4">
              <a
                href="https://www.beep-safety.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Visit Beep Marketing Site
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeepPage;
