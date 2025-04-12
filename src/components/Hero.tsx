// Hero.tsx
const Hero: React.FC = () => {
  return (
    <section className="relative text-center py-32 px-6 bg-[#fefaf6]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/hero-graphic.png')` }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-[#2d2d2d] mb-4">
          Hi, I’m Aless 📸
        </h2>
        <p className="text-lg text-[#2d2d2d] max-w-xl mx-auto mb-6">
          Developer by craft, photographer by passion.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            View Projects
          </button>
          <button className="border border-black px-6 py-2 rounded-full">
            View Photography
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
