import { useState } from "react";
import slider1 from "../../assets/img/Home1.jpg"; // Ensure the path is correct
import slider2 from "../../assets/img/pexels-pixabay-159358.jpg"; // Ensure the path is correct
import slider3 from "../../assets/img/pexels-willbillurban-30449440.jpg";
import slider4 from "../../assets/img/pexels-quang-nguyen-vinh-222549-2138126.jpg";
 // Ensure the path is correct
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

  return  <Responsive slides={slides} /> ;
}
