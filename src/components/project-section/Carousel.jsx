import { useState } from "react";
import slider1 from "../../assets/img/Home1.jpg";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      image: slider1,
      title: "Project Edoran",
      description: "constant care and attention to the  patients. make good record",
   
    },
    {
        image: slider1,
        title: "Project Edoran",
        description: "constant care and attention to the  patients. make good record",
      
   
    },
    {
        image: slider1,
        title: "Project Edoran",
        description: "constant care and attention to the  patients. make good record",
     
    },
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
      className="relative w-full h-full bg-amber-500 overflow-hidden "
    >
     
      <div className="relative grid grid-flow-col h-62 auto-cols-[minmax(400px,1fr)] gap-0  md:h-full  md:overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative flex-shrink-1 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              index === activeIndex ? "scale-100" : "scale-95"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white h-full flex justify-center items-start flex-col p-4 backdrop-brightness-75 rounded-lg">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="mt-4 inline-block px-4 py-2 bg-amber-400 rounded hover:bg-amber-300"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

   
      <div className="absolute z-30 flex space-x-2 bottom-4 left-1/2 transform -translate-x-1/2">
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
        className="absolute top-1/2 -left-4 z-30 flex items-center justify-center px-4 group focus:outline-none"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 text-amber-400 bg-white/30 rounded-full group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <ChevronDoubleLeftIcon />
        </span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 -right-4 z-30 flex items-center justify-center px-4 group focus:outline-none"
        onClick={handleNext}
        aria-label="Next"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 text-amber-400 bg-white/30 rounded-full group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <ChevronDoubleRightIcon />
        </span>
      </button>
    </div>
  );
}
