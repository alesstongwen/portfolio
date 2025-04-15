import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramIcon = FaInstagram as unknown as React.FC<{
  className?: string;
}>;

const PhotographyPage: React.FC = () => {
  const images = [
    {
      src: "/assets/swing.JPG",
      alt: "swing",
    },
    {
      src: "/assets/victoria.JPG",
      alt: "Christmas Eve @ Victoria",
    },
    {
      src: "/assets/coffee.JPG",
      alt: "coffee",
    },
    {
      src: "/assets/steam.JPG",
      alt: "Vancouver Steam Clock",
    },
    {
      src: "/assets/temple.JPG",
      alt: "Longshan Temple in Taiwan",
    },
    {
      src: "/assets/stop.JPG",
      alt: "Street Traffic Light",
    },
    {
      src: "/assets/drinks.JPG",
      alt: "drinks",
    },
    {
      src: "/assets/lover.JPG",
      alt: "lovers in the window",
    },
    {
      src: "/assets/sushi.JPG",
      alt: "sushi",
    },
    {
      src: "/assets/sunset.JPG",
      alt: "sunset",
    },
    {
      src: "/assets/tulips.JPG",
      alt: "tulips",
    },
    {
      src: "/assets/enno.JPG",
      alt: "Enno Cheng's concert",
    },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-16">
        <h2
          className="text-3xl font-bold"
          style={{ color: "#6F4634", fontFamily: "Tan Nimbus" }}
        >
          Why Photography?
        </h2>
        <p className="mt-4">
          Photography is how I stay present. While coding challenges my logic
          and structure, photography lets me slow down and notice the small
          details—the way light hits a surface, or the candid expressions during
          an event. I often bring my camera to school activities, and some of my
          shots have even been featured on BCIT’s official social media.
          Including this part of me in my portfolio isn’t just about
          aesthetics—it reflects how I approach everything I do: with curiosity,
          intentionality, and a deep appreciation for both people and moments.
        </p>
      </div>
      <div className="mt-10 mb-10 flex justify-center">
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
