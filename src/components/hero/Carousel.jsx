import { useState } from "react";
import slider1 from "../../assets/img/Home1.jpg";
import slider2 from "../../assets/img/Home3.jpg";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      image: slider1,
      title: "First Slide",
      subTitile: "Architecture Project" ,
      description: "This is the description for the first slide.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      image: slider2,
      title: "Second Slide",
      description: "This is the description for the second slide.",
      buttonText: "Explore",
      buttonLink: "#",
    },
    // Add more slides here if needed
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full md:h-[500px] bg-amber-500 overflow-hidden"
    >
      <div className="relative h-56 overflow-hidden md:h-full ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`p-48  absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" text-white h-full flex justify-center items-start flex-col">
              <h2 className="text-2xl z-40 font-bold">{slide.title}</h2>
              <p className="mt-2 z-40">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="mt-4  z-40 inline-block px-4 py-2 bg-amber-400 rounded hover:bg-amber-300"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 h-10  bottom-4 left-300 transform ">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute bottom-4 right-1/2 z-30 flex items-center justify-center px-4 group focus:outline-none transform translate-x-1/2 -translate-y-0"
        onClick={handleNext}
        aria-label="Next"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 text-amber-400 bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white">
          <ChevronDoubleRightIcon />
        </span>
      </button>

      <button
        type="button"
        className="absolute   bottom-4 left-1/2 z-30 flex items-center justify-center px-4 group focus:outline-none transform translate-x-1/2 -translate-y-0"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 text-amber-400 bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white ">
          <ChevronDoubleLeftIcon />
        </span>
      </button>
      <span className="h-72 w-[300px] absolute left-0 top-1/2 z-10 transform -translate-y-1/2  bg-black/30"> 

      </span>
    </div>
  );
}
