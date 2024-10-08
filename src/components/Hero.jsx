import React from "react";
import path from "../images/Path.png";
import group from "../images/Group.png";
// import hero from "../images/hero.jpg";

function Hero() {
  return (
    <div className="relative w-full h-screen flex">
      {/* Left Side with Content */}
      <div className=" md:block lg:w-1/2 leading-10 h-full mt-32 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold text-secondary relative">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className=" p-2 md:px-6 md:py-3 bg-secondary text-white rounded-md">
            Call to Action
          </button>
          <button className="px-1 py-1 md:px-6 md:py-3 bg-white text-secondary  rounded-md border border-secondary">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side with Background Image */}
      <div
        className="hidden lg:block w-[50%] h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${path})` }}
      >
        {/* Overlayed Image */}
        <div className="absolute inset-0  flex flex-col justify-right items-end text-right mt-32">
          <img src={group} alt="" className="min-w-2 h-full   " />
        </div>
      </div>
      {/* <div className="relative hidden lg:block w-[50%] h-full bg-cover bg-center">
        <div className="absolute inset-y-0 right-0 flex items-end">
          <img src={hero} alt="" className="h-full" />
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
