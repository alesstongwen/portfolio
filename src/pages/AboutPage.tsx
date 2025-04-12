import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fefaf6] py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        Hi, I’m Aless, a highly motivated and versatile professional with a
        background in SEO and full-stack web development. After graduating from
        university with a degree in BA of Communication and minor in Digital
        Media from University of Minnesota, I began my early career in SEO,
        where I discovered my passion for tech and web design. Over time, I
        realized I wanted to create rather than optimize websites, which led me
        to full-stack web development.
      </p>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        In addition to my university education, I completed a comprehensive
        program at the <b>British Columbia Institute of Technology (BCIT)</b>,
        where I refined my skills in web development and gained hands-on
        experience in modern technologies. This journey solidified my commitment
        to continuously growing in my craft and delivering high-quality results.
        The program at BCIT provided me with the technical expertise and
        practical knowledge needed to tackle complex challenges in web
        development.
      </p>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        With my background in SEO, I’ve developed a strong appreciation for
        creating exceptional user experiences. I’ve seen firsthand how design
        and usability can influence user behavior, and I’m passionate about
        applying that knowledge to web development. From designing intuitive
        interfaces to ensuring seamless navigation, I prioritize building
        websites and applications that are functional, engaging, and accessible
        to users.
      </p>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        I bring a unique blend of technical expertise, creativity, and empathy
        to every project I undertake. The fast-paced nature of the tech
        industry, with its endless opportunities for exploration and innovation,
        constantly fuels my motivation and inspires me to grow. I aspire to work
        in an environment that celebrates innovation, where I can collaborate
        with like-minded individuals who value curiosity, teamwork, and
        continuous learning.
      </p>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        Whether building robust back-end systems, optimizing databases, or
        crafting responsive front-end interfaces, I approach each challenge with
        enthusiasm, dedication, and a commitment to excellence.
      </p>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        These are the technologies that I have worked on before:
      </p>
      <ul className="list-disc max-w-4xl mx-auto text-lg mb-6 pl-6">
        <li>Languages: TypeScript, JavaScript, C#, PHP, HTML, CSS</li>
        <li>Frameworks: React, React Native, Expo, .NET Framework</li>
        <li>Tools: GitHub, Visual Studio Code, MySQL, PostgreSQL, Figma</li>
        <li>SEO: SEMrush, Ahrefs, Google Analytics, Google Search Console</li>
      </ul>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        Beyond the tech world, I enjoy creative and relaxing pursuits like
        photography and cafe hopping around the city. Capturing the world
        through my lens and sharing those moments with the community gives me
        fresh perspectives and inspiration to channel into my work.
      </p>

      <p className="text-lg max-w-4xl mx-auto text-left mb-6">
        As someone who values continuous growth, I am always eager to learn,
        adapt, and refine my craft. I aim to contribute to meaningful projects
        that push the boundaries of what’s possible while positively impacting
        people and the environment.
      </p>

      <div className="text-center mt-12">
        <a href="/" className="text-blue-600 underline">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
