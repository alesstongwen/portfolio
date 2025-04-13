import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-indigo-400 min-h-screen flex flex-col items-center py-16">
      {/* Header Section */}
      <div className="text-left mb-12 px-4">
        <h1 className="text-5xl font-extrabold text-white mb-4">About Me</h1>
        <p className="text-lg text-white max-w-3xl mx-auto">
          Hi, I'm Aless, a highly motivated and versatile professional with a
          background in SEO and full-stack web development. After graduating
          from university with a BA in Communication and Digital Media minor
          from University of Minnesota, I began my early career in SEO, where I
          discovered my passion for tech and web design. Over time, I realized I
          wanted to create rather than optimize websites, which led me to
          full-stack web development.
        </p>
      </div>

      {/* Image and First Two Paragraphs */}
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 mb-12 items-start">
        {/* Left side - Image */}
        <div className="md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
          <div className="flex space-x-1 mb-1"></div>
          <img
            src="/assets/Aless-profile.jpg"
            alt="Aless Wei"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Right side - First paragraph */}
        <div className="md:w-1/2 text-left md:pl-6 flex flex-col">
          <p className="text-lg text-white mb-6">
            With my background in SEO, I've developed a strong appreciation for
            creating exceptional user experiences. I've seen firsthand how
            design and usability can influence user behavior, and I'm passionate
            about applying that knowledge to web development. From designing
            intuitive interfaces to ensuring seamless navigation, I prioritize
            building websites and applications that are functional, engaging,
            and accessible to users.
          </p>
        </div>
      </div>

      {/* Third Paragraph Aligned with First Paragraph */}
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <p className="text-lg text-white">
          I bring a unique blend of technical expertise, creativity, and empathy
          to every project I undertake. The fast-paced nature of the tech
          industry, with its endless opportunities for exploration and
          innovation, constantly fuels my motivation and inspires me to grow. I
          aspire to work in an environment that celebrates innovation, where I
          can collaborate with like-minded individuals who value curiosity,
          teamwork, and continuous learning.
        </p>
      </div>

      {/* Remaining Content */}
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <p className="text-lg text-white mb-6">
          Whether building robust back-end systems, optimizing databases, or
          crafting responsive front-end interfaces, I approach each challenge
          with enthusiasm, dedication, and a commitment to excellence.
        </p>

        <p className="text-lg text-white">
          These are the technologies that I have worked on before:
        </p>
        <ul className="list-disc pl-6 text-white mb-6">
          <li>Languages: TypeScript, JavaScript, C#, PHP, HTML, CSS</li>
          <li>Frameworks: React, React Native, Expo, .NET Framework</li>
          <li>Tools: GitHub, Visual Studio Code, MySQL, PostgreSQL, Figma</li>
          <li>SEO: SEMrush, Ahrefs, Google Analytics, Google Search Console</li>
        </ul>

        <p className="text-lg text-white mb-6">
          Beyond the tech world, I enjoy creative and relaxing pursuits like
          photography and cafe hopping around the city. Capturing the world
          through my lens and sharing those moments with the community gives me
          fresh perspectives and inspiration to channel into my work.
        </p>

        <p className="text-lg text-white mb-6">
          As someone who values continuous growth, I am always eager to learn,
          adapt, and refine my craft. I aim to contribute to meaningful projects
          that push the boundaries of what's possible while positively impacting
          people and the environment.
        </p>

        {/* Explore Projects Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/projects"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold"
          >
            Explore My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
