import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper styles

import slider1 from "../../assets/img/Home1.webp";
import slider2 from "../../assets/img/pexels-pixabay-159358.webp";
import slider3 from "../../assets/img/pexels-willbillurban-30449440.webp";
import slider4 from "../../assets/img/pexels-quang-nguyen-vinh-222549-2138126.webp";
import { Autoplay, Navigation, Pagination} from "swiper/modules";

const Carousel = () => {
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

  return (
    <Swiper
      spaceBetween={0}
      modules={[Autoplay, Navigation, Pagination]}
      // slidesPerView={2}
      breakpoints={
        {
          640: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }
      }
      autoplay={{ delay: 5000 }}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      lazy={true}
      preloadImages={false}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="h-[400px] md:h-[600px] relative">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
              loading="lazy"
            />

            {/* Content */}
            <div className="relative flex justify-center items-center h-full z-20 text-white p-8 flex-col text-center md:text-left max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg md:text-xl">{slide.description}</p>
              <a href={slide.buttonLink} className="mt-4 px-4 py-2 bg-amber-400 rounded hover:bg-amber-300">
                {slide.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;