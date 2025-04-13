import React from "react";

const BloomPage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold">Bloom</h1>
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
              community as well as events.
            </p>
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

export default BloomPage;
