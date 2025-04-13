import React from "react";
import { FaGithub } from "react-icons/fa";

const JobApplicationTrackerPage: React.FC = () => {
  return (
    <div className="pt-5 pb-10 px-6">
      <div className="px-6 py-10 max-w-6xl mx-auto text-black">
        <section className="text-left py-16 px-4">
          <h1 className="text-4xl font-extrabold mb-8">
            Job Application Tracker
          </h1>
          <div className="flex justify-center mb-10">
            <img
              src="/assets/jobapplicationtracker-thumbnail.png"
              alt="Beep App"
              className="rounded-xl w-full max-w-[90vw] object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="mt-4">
              This application is a drag-and-drop job management tool for
              tracking job applications. Users can add, edit, delete, and move
              jobs between columns such as "Applied," "Interview," "Offered,"
              and "Rejected." The backend is built using Hono, Drizzle ORM, and
              SQLite, while the frontend uses React with react-beautiful-dnd for
              drag-and-drop functionality. This was a solo built project.
            </p>
          </div>
          {/* YouTube Video Embed */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">
              Watch the Job Application Tracker in Action
            </h2>
            <div className="mt-4 flex justify-left">
              <iframe
                className="w-full max-w-[560px] h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/bsgN3Eg0rx4"
                title="Job Application Tracker Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                <strong>Authentication:</strong> Authenticated users can access
                the dashboard. User authentication is handled via Kinde.
              </li>
              <li>
                <strong>Job Management:</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    Add new jobs with details such as title, company, section
                    (status), and description.
                  </li>
                  <li>Edit job details and update their status.</li>
                  <li>Delete jobs directly from the modal.</li>
                  <li>Drag and drop jobs between different sections.</li>
                </ul>
              </li>
              <li>
                <strong>Backend API:</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Fetch dashboard data.</li>
                  <li>Add a new job to the database.</li>
                  <li>Update job status and position.</li>
                  <li>Delete a job.</li>
                </ul>
              </li>
              <li>
                <strong>Frontend:</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    Dynamic drag-and-drop interface with{" "}
                    <code>react-beautiful-dnd</code>.
                  </li>
                  <li>Modal for adding and editing jobs.</li>
                  <li>Fully responsive design.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Challenges</h2>
            <p className="mt-4">
              This was my first time building a full-stack application with
              separate backend and frontend routes. I faced challenges in
              managing state across different components and ensuring that the
              drag-and-drop functionality worked seamlessly with the backend
              API. Using Kinde for authentication was challengeing as well
              because of the structure of the app, but I learned a lot about
              managing user sessions and securing API endpoints.
            </p>
          </div>

          {/* Reflection */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Reflection</h2>
            <p className="mt-4">
              I did this project back in Term 3 alongside our biggest project in
              the program,&nbsp;
              <a
                href="/projects/beep"
                className="underline text-blue-400 hover:text-blue font-semibold"
              >
                the Beep Safety App
              </a>{" "}
              so it was challenge to manage my time. I learned a lot about
              building a full-stack application and the importance of
              maintaining a clean and organized codebase. The drag-and-drop
              functionality was particularly rewarding to implement, as it added
              a level of interactivity that made the application feel polished
              and user-friendly. Overall, this project solidified my
              understanding of React and backend development, and I am proud of
              how this turn out.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://github.com/alesstongwen/job-application-tracker"
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

export default JobApplicationTrackerPage;
