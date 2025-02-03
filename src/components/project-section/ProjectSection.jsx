import React from "react";
import LeftContainer from './LeftContainer';
import image from "../../assets/img/projectsB.png";
import Carousel from './Carousel';

export default function ProjectSection() {
  return (
    <div className="w-full min-h-[450px] lg:h-[450px] grid grid-cols-1 lg:grid-cols-7">
      {/* Left Section */}
      <div className="bg-[#333] md:col-span-3 relative px-5 lg:px-20 flex items-center">
        <LeftContainer />
        <img src={image} alt="image" className="absolute opacity-10 md:opacity-65 h-50 left-0 bottom-0" />
      </div>

      {/* Right Section (Carousel) */}
      <div className="h-full md:col-span-4">
        <Carousel />
      </div>
    </div>
  );
}

