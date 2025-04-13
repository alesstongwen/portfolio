import ScrapbookWindow from "../components/ScrapbookWindow";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-indigo-400 min-h-screen flex flex-col items-center py-16">
      {/* Welcome Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold">Aless Wei</h1>
        <h2 className="text-xl mt-4">
          Full stack web developer & Photographer
        </h2>
        <div className="mt-8">
          {/* About Me Button */}
          <button className="bg-black text-white px-6 py-2 rounded-full">
            <a href="/about">About Me</a>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <div className="px-6 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 justify-items-center">
          <Link to="/projects/beep">
            <ScrapbookWindow
              title="Beep"
              content="React Native app for women's safety."
              imgSrc="/assets/Beep-showcase.png"
            />
          </Link>
          <Link to="/projects/chezmari">
            <ScrapbookWindow
              title="Chez Mari"
              content="Website rebuilt using Wordpress/PHP"
              imgSrc="/assets/ChezMariThumbnail.png"
            />
          </Link>
          <Link to="/projects/ai-workout-guide">
            <ScrapbookWindow
              title="AI Workout Guide"
              content="Description of project 3."
              imgSrc="/assets/project3.jpg"
            />
          </Link>

          <ScrapbookWindow
            title="Project 4"
            content="Description of project 4."
            imgSrc="/assets/project4.jpg"
          />
          <Link to="/photography">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              View My Photography
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
