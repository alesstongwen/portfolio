const About: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 bg-[#fefaf6]">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <p className="text-lg mb-4">
            Hi, I'm Aless — a full-stack developer and a passionate
            photographer. I thrive on creating beautiful, intuitive digital
            experiences while capturing the world through my lens.
          </p>
          <p className="text-lg mb-4">
            Whether I’m writing code or taking a photo, I’m always looking to
            tell a story with every project I take on. I believe in **learning
            by doing** and always enjoy new challenges.
          </p>
        </div>
        <div className="w-60 h-60 overflow-hidden rounded-full shadow-md bg-gray-200">
          <img
            src="/assets/your-portrait.jpg" // Placeholder or your own image
            alt="Aless"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-3xl font-semibold text-center">Skills & Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-xl">Development Skills</h4>
            <ul className="list-disc pl-5">
              <li>React & TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Git/GitHub</li>
              <li>API Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl">Photography Skills</h4>
            <ul className="list-disc pl-5">
              <li>Portrait Photography</li>
              <li>Street & Lifestyle Photography</li>
              <li>Editing with Lightroom</li>
              <li>Creative Direction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
