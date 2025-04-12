import React from "react";

const ChezMariPage: React.FC = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen">
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold">Chez Mari</h1>
        <p className="text-xl mt-4">Website rebuilt using Wordpress/PHP.</p>
        <p className="text-lg mt-4">
          This project involved redesigning and rebuilding a salon website,
          adding a new booking system and improving the user experience.
        </p>
        {/* Add more details about the project here */}
        <div className="mt-8">
          <img
            src="/assets/ChezMariThumbnail.png"
            alt="Chez Mari Salon"
            className="w-72 h-72 object-cover mt-6"
          />
        </div>
      </section>
    </div>
  );
};

export default ChezMariPage;
