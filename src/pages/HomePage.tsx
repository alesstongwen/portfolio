import ScrapbookWindow from "../components/ScrapbookWindow";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Welcome Section */}
      <section
        className="w-full bg-no-repeat bg-center bg-contain h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8"
        style={{
          backgroundImage: "url('/assets/HomeBanner.svg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          style={{ color: "#6F4634", fontFamily: "Tan Nimbus" }}
        >
          Aless Wei
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            2000,
            "Photographer",
            2000,
            "Coffee Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className="text-base sm:text-lg md:text-xl mt-4"
          style={{ color: "#6F4634" }}
        />

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a
              href="https://github.com/alesstongwen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6F4634] text-2xl hover:opacity-80"
            >
              {FaGithub({ className: "text-3xl" })}
            </a>
            <a
              href="https://linkedin.com/in/aless-wei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6F4634] text-2xl hover:opacity-80"
            >
              {FaLinkedin({ className: "text-3xl" })}
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="px-6 py-8">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-8"
          style={{ color: "#6F4634", fontFamily: "Tan Nimbus" }}
        >
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
      <a
        href="/about"
        className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors mb-12"
      >
        About Me
      </a>
    </div>
  );
};

export default HomePage;
