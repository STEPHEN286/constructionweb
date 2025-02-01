import React from "react";
import Slider from "react-slick";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom arrow components
const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute bottom-4 right-1/2 transform translate-x-10 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-gray-700 transition z-10"
        onClick={onClick}
      >
        <FaArrowRight size={24} />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-20 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-gray-700 transition z-10"
        onClick={onClick}
      >
        <FaArrowLeft size={24} />
      </div>
    );
  
  
};

function Responsive({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      {/* Container to control width */}
      <div className="   mx-auto relative min-h-[450px]">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-[450px] flex items-center justify-center">
              <div
                className="relative w-full h-full   transition-transform duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-white h-full w-full flex justify-center items-start flex-col p-4 backdrop-brightness-75 rounded-lg">
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
