import ScrapbookWindow from "../components/ScrapbookWindow";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen">
      {/* Welcome Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold">Aless Wei</h1>
        <p className="text-xl mt-4">I’m Aless – Developer & Photographer</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-10 justify-items-center">
          <ScrapbookWindow
            title="Project 1"
            content="Description of project 1."
            imgSrc="/assets/project1.jpg"
          />
          <ScrapbookWindow
            title="Project 2"
            content="Description of project 2."
            imgSrc="/assets/project2.jpg"
          />
          <ScrapbookWindow
            title="Project 3"
            content="Description of project 3."
            imgSrc="/assets/project3.jpg"
          />
          <ScrapbookWindow
            title="Project 4"
            content="Description of project 4."
            imgSrc="/assets/project4.jpg"
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
