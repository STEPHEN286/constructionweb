import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../ui/Arrows";


import slider1 from "../../assets/img/Home1.webp"; 
import slider2 from "../../assets/img/pexels-pixabay-159358.webp"; // Ensure the path is correct
import slider3 from "../../assets/img/pexels-willbillurban-30449440.webp";
import slider4 from "../../assets/img/pexels-quang-nguyen-vinh-222549-2138126.webp";
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

   const slides = [
      {
        image: slider1, 
        title: "Modern Residential Construction",
        description: "Building dream homes with cutting-edge design and sustainable materials.",
        buttonLink: "/residential-construction",
        buttonText: "View Projects",
      },
      {
        image: slider2,
        title: "Commercial Building Solutions",
        description: "Expertise in constructing state-of-the-art commercial spaces for businesses.",
        buttonLink: "/commercial-construction",
        buttonText: "Learn More",
      },
      {
        image: slider3, 
        title: "Infrastructure Development",
        description: "Creating robust infrastructure to support growing communities.",
        buttonLink: "/infrastructure-projects",
        buttonText: "Explore Services",
      },
      {
        image: slider4, 
        title: "Renovation & Remodeling",
        description: "Transforming existing spaces into modern, functional environments.",
        buttonLink: "/renovation-services",
        buttonText: "Get a Quote",
      },
    ];
  

  // const handleIndicatorClick = (index) => {
  //   setActiveIndex(index);
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <div className=" w-full h-[400px] md:h-[600px]  ">
      <Slider {...settings} className="h-full w-full">
        {slides.map((slide, index) => (
          <div key={index} className="h-[400px] md:h-[600px] mx-auto  px-2  relative   sm:px-6 lg:px-8 ">
            <div className="flex text-center  h-full  justify-center  z-40  items-center  md:items-start mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex-col p-8 text-white">
              <h2 className="text-2xl z-20  font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg z-20">{slide.subTitle}</p>
              <p className=" z-20 mt-2">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="mt-4 z-20  px-4 py-2 bg-amber-400 rounded hover:bg-amber-300"
              >
                {slide.buttonText}
              </a>
            </div>
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute md:bottom-1/2 transform md:translate-y-1/2 left-0 backdrop-blur-sm bg-black opacity-35 inset-0 md:h-74 md:w-[800px]  z-10">

            </div>
          </div>
          
        ))}
      </Slider>

      {/* <div className="absolute bottom-4 right-0 transform -translate-x-20 space-x-2 text-white p-3 rounded-full cursor-pointer  hover:bg-gray-700 transition z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-amber-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div> */}</div>
  );
}
