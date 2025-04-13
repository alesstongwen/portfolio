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
          <div className="mt-12">
            <h2 className="text-3xl font-bold">
              Watch the Chez Mari New Website Demo
            </h2>
            <div className="mt-4 flex justify-left">
              <iframe
                className="w-full max-w-[560px] h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/R0dx3OQ5uzM"
                title="Chez Mari Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Key Improvements</h2>
            <ul className="mt-4 list-disc pl-6">
              <li>
                Implemented Bookly plugin in WordPress that customers can easily
                schedule multiple services online and allow the salon to manage
                their staff, schedules, and services efficiently.
              </li>
              <li>
                Implemented blog CMS via WordPress to allow the salon to share
                products information, tips, and promotions with their customers.
              </li>
              <li>
                Redesign the websites for a modern and elegant look that
                reflects the salon’s services and brand identity.
              </li>
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
              Building Chez Mari was my first project working with Wordpress.
              Though I have worked in Wordpress before for content uploading in
              my previous job, I had never built a site from scratch. It was a
              great learning experience that allowed me to explore the
              platform’s capabilities and limitations from dev's perspectives. I
              also learned how to effectively communicate with clients who may
              not have a technical background, which is crucial in ensuring that
              their vision is accurately translated into the final product.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChezMariPage;
