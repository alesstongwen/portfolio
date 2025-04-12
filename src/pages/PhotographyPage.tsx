import React from "react";

const PhotographyPage: React.FC = () => {
  const images = [
    { src: "/assets/photo1.jpg", alt: "Photo 1", caption: "Beautiful Sunset" },
    {
      src: "/assets/photo2.jpg",
      alt: "Photo 2",
      caption: "Mountain Landscape",
    },
    { src: "/assets/photo3.jpg", alt: "Photo 3", caption: "City Skyline" },
    { src: "/assets/photo4.jpg", alt: "Photo 4", caption: "Forest Path" },
    // Add more images here
  ];

  return (
    <div className="bg-[#fefaf6] min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Photography Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-64 transition-all group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographyPage;
