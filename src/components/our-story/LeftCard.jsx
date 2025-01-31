import React from "react";

export default function LeftCard() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-gray-400 font-bold">Our Story</h1>
      <div className="mb-5 space-y-2 ">
        <p className="font-bold text-3xl">Who are we</p>
        <span className="block h-1 w-1/12 bg-amber-400"></span>
      </div>
      <p>
        Welcome to Ted-Nomex Construction Company! With over 12 years of
        industry experience, we have established ourselves as a leading
        construction firm dedicated to delivering exceptional building
        solutions. Our journey began with a vision to transform the construction
        landscape through innovative practices, superior craftsmanship, and
        unwavering commitment to quality. Our Mission
      </p>
      <a href="" className="bg-gray-800 text-amber-400 p-4  text-sm w-fit">READ MORE ABOUT US</a>
    </div>
  );
}
