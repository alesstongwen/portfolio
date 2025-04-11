import React from "react";
import ScrapbookWindow from "../components/ScrapbookWindow";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen">
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl mt-4">I’m Aless – Developer & Photographer</p>
        <div className="mt-8">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            <a href="/about">About Me</a>
          </button>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        <ScrapbookWindow
          title="💻 Dev Stack"
          content="React, TypeScript, Tailwind"
        />
        <ScrapbookWindow title="📸 Favorite Camera" content="Fujifilm X100V" />
      </div>
    </div>
  );
};

export default HomePage;
