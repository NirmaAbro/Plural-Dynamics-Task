import React from "react";
// import path from "../images/sectionrwo.jpg";
import icon from "../images/Icon.svg";
import girl from "../images/girl.jpg";

function SectionTwo() {
  return (
    <div className="block md:flex items-center md:mt-28 mt-48 bg-[#F9F9F9] ">
      {/* Text Content */}
      <div className="md:w-1/2 m-9">
        <h1 className="text-3xl font-medium leading-tight text-secondary ml-4">
          Light, Fast & Powerful
        </h1>
        <p className="mt-4 text-lg text-[#6F7CB2] ml-4 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex justify-center items-center m-4 space-x-4 ">
          <div className="justify-center items-center mt-4">
            <img
              src={icon}
              alt=""
              className="text-start justify-start m-2 ml-3 "
            />
            <h6 className="text-secondary m-2 ">Title Goes Here</h6>
            <p className="text-[#6F7CB2] m-2 ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
          {/* div 2  */}
          <div className="justify-center items-center mt-4">
            <img
              src={icon}
              alt=""
              className="text-start justify-start m-2 ml-3"
            />
            <h6 className="text-secondary m-2 ">Title Goes Here</h6>
            <p className="text-[#6F7CB2] m-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 block ">
        <img src={girl} alt=""  className="bg-primary"/>
      </div>
    </div>
  );
}

export default SectionTwo;

// import React from "react";

// function SectionTwo() {
//   return (
//     <div className="bg-purple-500 mt-32  ">
//       <h1>hi fom section two </h1>
//     </div>
//   );
// }

// export default SectionTwo;
