import React from "react";
import { FaGithub } from "react-icons/fa";

const DevPortfolioCMS: React.FC = () => {
  return (
    <div className="pt-0 sm:pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left pt-4 sm:pt-10 pb-16 px-4">
          {/* Breadcrumb */}
          <div className="mb-4">
            <a
              href="/projects"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              ← Back to Projects
            </a>
          </div>
          <h1 className="text-4xl font-extrabold mb-8">Dev Portfolio CMS</h1>
          <div className="flex justify-center mb-10">
            <img
              src="/assets/CMS-banner.png"
              alt="Dev Portfolio CMS"
              className="rounded-xl w-full max-w-[90vw] object-cover"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <p className="mt-4">
              TypeScript, PHP, Laravel, Blade, Docker, SQLite, Tailwind CSS
            </p>
          </div>

          {/* Project Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="mt-4">
              The Dev Portfolio CMS is a full-stack web application that allows
              users to create, edit, and manage their project portfolios. The
              project features a dynamic dashboard where users can add project
              details such as title, description, GitHub link, and an image.
              Users can also modify and delete their projects. It was built
              using PHP, Laravel, and Docker for the backend. This was a solo
              project.
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <ul className="mt-4 list-disc pl-6">
              <li>
                Project Management: Users can create, edit, and delete projects.
              </li>
              <li>
                Image Upload: Projects can have images uploaded as part of their
                portfolio. (less than 2M)
              </li>
              <li>
                GitHub Link Integration: Projects can be linked to their
                respective GitHub repositories.
              </li>
              <li>
                User Authentication: Ensures only authorized users can manage
                their portfolios.
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Challenges & Reflection</h2>
            <p className="mt-4">
              A major challenge faced was ensuring proper file upload and
              handling large file sizes on different hosting environments. The
              development process was also affected by setting up the backend
              and the interaction between Laravel, Docker, and TypeScript,
              ensuring smooth deployment.
            </p>
            <p className="mt-4">
              Building this CMS provided me with valuable experience in
              developing a full-stack project using PHP and Laravel. It also
              enhanced my understanding of Docker and cloud deployment. I'm
              currently working on integrating it as the backend for my
              portfolio, which will help make the frontend lighter and faster.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://github.com/alesstongwen/Developer-Portfolio-CMS"
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              {FaGithub({ className: "text-xl" })}
              View Source Code
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevPortfolioCMS;
