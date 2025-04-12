import React from "react";

const ChezMariPage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold">Chez Mari Hair Salon</h1>
          <div className="flex justify-center mb-10">
            <img
              src="/assets/ChezMari-banner.png"
              alt="Beep App"
              className="rounded-xl w-full max-w-[90vw] object-cover"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <p className="mt-4">
              Figma, PHP, WordPress, Illustrator, Tailwindcss, MySQL
            </p>
          </div>
          {/* Project Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="mt-4">
              Chez Mari is a website redesign and rebranding project for a local
              hair salon based in Vancouver. The goal was to transform the
              salon’s outdated site into a modern, elegant, and user-friendly
              experience that reflects the brand’s high-end services. Our focus
              was on creating a cohesive and responsive visual identity,
              improving the user experience, and integrating a booking system
              that would simplify appointment scheduling for both the salon and
              its clients.{" "}
            </p>
            <p className="mt-4">
              Our client was looking for a fresh and modern design that would
              attract new customers while also catering to their existing
              clientele. They also wanted a more thorough booking system and
              with SEO in mind. We worked closely with the salon owner to
              understand their vision and goals, and we conducted user research
              to identify pain points in the current booking process. Based on
              our findings, we created a new site structure that prioritized
              ease of use and accessibility.
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
              One of the main challenges we faced was establishing efficient
              communication with the client. As the salon team didn’t have a
              technical background, it was often difficult for them to visualize
              certain design choices or understand backend limitations. We had
              to find creative ways to explain why certain design decisions—like
              simplifying page layouts, adding more whitespace, or emphasizing
              mobile usability—were in their best interest.
            </p>
            <p className="mt-4">
              This involved a lot of mockups, walkthroughs, and feedback loops
              to ensure both sides were aligned. Additionally, customizing a
              third-party plugin like Bookly Pro to meet the brand’s aesthetic
              while maintaining its core functionality required in-depth plugin
              overrides and careful styling to avoid breaking updates.
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

export default ChezMariPage;
