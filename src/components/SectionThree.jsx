import React from "react";

function Section({ imgSrc, title, description }) {
  return (
    <div className="block md:flex items-center md:mt-32 space-x-4">
      {/* Image Container */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-4">
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full md:w-[540px] m-auto justify-center items-center text-center mt-48 md:mt-0"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 w-full p-4">
        <h1 className="text-3xl font-medium leading-tight text-secondary">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[#6F7CB2] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Section;
