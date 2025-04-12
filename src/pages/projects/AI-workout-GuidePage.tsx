import React from "react";

const AIWorkoutGuidePage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold">Beep</h1>
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
            <h2 className="text-3xl font-bold">Challenges</h2>
            <p className="mt-4">
              One of the main challenges was integrating real-time location
              tracking with Firebase. Ensuring that the app works reliably in
              areas with poor GPS signals was another obstacle.
            </p>
          </div>

          {/* Reflection */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Reflection</h2>
            <p className="mt-4">
              Building Beep was an eye-opening experience, as it allowed me to
              work with React Native and integrate multiple APIs. It was also
              rewarding to create an app that can potentially help people feel
              safer in their everyday lives.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIWorkoutGuidePage;
