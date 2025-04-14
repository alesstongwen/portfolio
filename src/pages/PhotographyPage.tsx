import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramIcon = FaInstagram as unknown as React.FC<{
  className?: string;
}>;

const PhotographyPage: React.FC = () => {
  const images = [
    {
      src: "/assets/swing.jpg",
      alt: "swing",
    },
    {
      src: "/assets/victoria.jpg",
      alt: "Christmas Eve @ Victoria",
    },
    {
      src: "/assets/coffee.jpg",
      alt: "coffee",
    },
    {
      src: "/assets/steam.jpg",
      alt: "Vancouver Steam Clock",
    },
    {
      src: "/assets/temple.jpg",
      alt: "Longshan Temple in Taiwan",
    },
    {
      src: "/assets/stop.jpg",
      alt: "Street Traffic Light",
    },
    {
      src: "/assets/drinks.jpg",
      alt: "drinks",
    },
    {
      src: "/assets/lover.jpg",
      alt: "lovers in the window",
    },
    {
      src: "/assets/sushi.jpg",
      alt: "sushi",
    },
    {
      src: "/assets/sunset.jpg",
      alt: "sunset",
    },
    {
      src: "/assets/tulips.jpg",
      alt: "tulips",
    },
    {
      src: "/assets/enno.jpg",
      alt: "Enno Cheng's concert",
    },
    // You can keep adding more images here
  ];

  return (
    <div className="bg-[#fefaf6] min-h-screen py-16 px-4 sm:px-8">
      <h1
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "#6F4634", fontFamily: "Tan Nimbus" }}
      >
        Photography Gallery
      </h1>

      {/* Fixed 3-column grid */}
      <div className="grid grid-cols-3 gap-12 justify-items-center">
        {images.map((image, index) => (
          <div key={index} className="w-full flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[500px] object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <a
          href="https://www.instagram.com/clicksbyaless/"
          target="_blank"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          <InstagramIcon className="text-xl" />
          View More on Instagram
        </a>
      </div>
    </div>
  );
};

export default PhotographyPage;
