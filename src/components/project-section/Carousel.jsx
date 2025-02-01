import { useState } from "react";
import slider1 from "../../assets/img/Home1.webp"; 

import slider3 from "../../assets/img/pexels-willbillurban-30449440.webp";
import slider4 from "../../assets/img/pexels-quang-nguyen-vinh-222549-2138126.webp";
 
import Responsive from "../ui/Responsive";

export default function Carousel() {
  const slides = [
    {
      image: slider1, 
      title: "Modern Residential Construction",
      description: "Building dream homes with cutting-edge design and sustainable materials.",
      buttonLink: "/residential-construction",
      buttonText: "View Projects",
    },
    {
      image: slider3,
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

  return  <Responsive slides={slides} /> ;
}
