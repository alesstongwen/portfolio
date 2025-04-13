import ScrapbookWindow from "../components/ScrapbookWindow";
import { Link } from "react-router-dom";

const ProjectPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-indigo-400 min-h-screen flex flex-col items-center py-16">
      {/* Projects Section */}
      <div className="px-6 py-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Projects
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 justify-items-center">
          <Link to="/projects/beep">
            <ScrapbookWindow
              title="Beep"
              content="React Native mobile app for safety."
              imgSrc="/assets/Beep-projectcard.webp"
            />
          </Link>
          <Link to="/projects/chezmari">
            <ScrapbookWindow
              title="Chez Mari"
              content="Website rebuilt using Wordpress/PHP"
              imgSrc="/assets/ChezMariThumbnail.png"
            />
          </Link>
          <Link to="/projects/dev-portfolio-CMS">
            <ScrapbookWindow
              title="dev-portfolio-CMS"
              content="PHP Lavarel web app"
              imgSrc="/assets/dev-cms.png"
            />
          </Link>
          <Link to="/projects/makeup-product-review">
            <ScrapbookWindow
              title="Makeup Product Review App"
              content="C# ASP .NET web app"
              imgSrc="/assets/MakeupReview.png"
            />
          </Link>
          <Link to="/projects/bloom">
            <ScrapbookWindow
              title="Bloom"
              content="Mobile App designed using Figma"
              imgSrc="/assets/Bloom-projectcard.webp"
            />
          </Link>
          <Link to="/projects/job-application-tracker">
            <ScrapbookWindow
              title="Job Application Tracker"
              content="React Hono web app"
              imgSrc="/assets/jobapplicationtracker-thumbnail.png"
            />
          </Link>
          {/* <div className="flex justify-center mt-8">
            <Link to="/photography">
              <button className="bg-black text-white px-6 py-2 rounded-full">
                View My Photography
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
