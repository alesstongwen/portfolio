import React from "react";
import { FaGithub } from "react-icons/fa";

const MakeupProductReviewPage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold mb-8">
            Makeup Product Review App
          </h1>
          <div className="flex justify-center mb-10">
            <img
              src="/assets/MakeupReview.png"
              alt="Beep App"
              className="rounded-xl w-full max-w-[90vw] object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="mt-4">
              MakeupReviewApp is a full-stack ASP.NET Core MVC web application
              that allows users to browse, review, and interact with makeup
              products. The app features user authentication, role-based
              authorization (Admin/User), and dynamic review submission using
              AJAX for a smoother user experience. Admin users can manage roles
              through a built-in dashboard. The application is deployed on
              Render and uses PlanetScale (MySQL-compatible) for cloud database
              hosting. This was a solo built project.
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <ul className="mt-4 list-disc pl-6">
              <li>
                View and review makeup products with images, brand, and price
              </li>
              <li>
                Authenticated users can submit reviews via a dynamic
                (pseudo-SPA) form
              </li>
              <li>
                User authentication with roles (Admin, User) using ASP.NET
                Identity
              </li>
              <li>Deployed to Render with PlanetScale database integration</li>
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
      <div className="mt-6 flex justify-center">
        <a
          href="https://github.com/alesstongwen/MakeUpProductReview"
          target="_blank"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          {FaGithub({ className: "text-xl" })}
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default MakeupProductReviewPage;
