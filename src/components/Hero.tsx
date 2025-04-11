const Hero = () => {
  return (
    <section className="text-center py-16 px-4 bg-[#fefaf6]">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m Aless 📸</h2>
      <p className="text-lg max-w-xl mx-auto text-gray-600 mb-6">
        I write code, capture moments, and build for impact.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-black text-white px-5 py-2 rounded shadow-md hover:bg-gray-800">
          View Projects
        </button>
        <button className="border border-black px-5 py-2 rounded shadow-md hover:bg-gray-100">
          View Photography
        </button>
      </div>
    </section>
  );
};

export default Hero;
