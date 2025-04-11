import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrapbookWindow from "./components/ScrapbookWindow";

function App() {
  return (
    <div className="bg-[#fefaf6] min-h-screen">
      <Navbar />
      <Hero />
      <section className="flex flex-wrap justify-center gap-8 p-8">
        <ScrapbookWindow
          title="💻 Dev Stack"
          content="React, TypeScript, Tailwind"
        />
        <ScrapbookWindow title="📸 Favorite Camera" content="Fujifilm X100V" />
        <ScrapbookWindow
          title="🎨 Current Mood"
          content="Vaporwave meets code"
        />
      </section>
    </div>
  );
}

export default App;
