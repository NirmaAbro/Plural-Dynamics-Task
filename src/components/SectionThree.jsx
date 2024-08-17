// // import React from "react";
// // import img from "../images/undraw_happy_news_hxmt.svg";

// // function SectionThree() {
// //   return (
// //     <div className="block md:flex items-center md:mt-28 mt-36">
// //       {/* Image Container */}
// //       <div className="md:w-1/2 justify-center items-center m-3">
// //         <img src={img} alt="" className="w-full h-full m-auto md:w-2/4" />
// //       </div>
// //       {/* Text Content */}
// //       <div className="md:w-1/2 justify-center items-center leading-2 mt-12 md:mt-0">
// //         <h1 className="text-3xl font-medium leading-tight text-secondary ml-4">
// //           Light, Fast & Powerful
// //         </h1>
// //         <p className="mt-4 text-lg text-[#6F7CB2] ml-4">
// //           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
// //           commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
// //           et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
// //           felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
// //           consequat massa quis enim.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SectionThree;

// import React from "react";

// function Section({ imgSrc, title, description }) {
//   return (
//     <div className="block md:flex items-center md:mt-28 mt-48 space-x-8">
//       {/* for img  */}
//       <div className=" mt-7 justify-center items-center mx-14 ml-9 md:2/4">
//         <img src={imgSrc} alt="" className="w-full h-full m-auto justify-center items-center text-center " />
//       </div>
//       {/* for text  */}
//       <div className="justify-center items-center leading-2 md:w-1/2 ml-4 mt-9 text-justify mx-3">
//         <h1 className="text-3xl font-medium leading-tight text-secondary ml-4">
//           {title}
//         </h1>
//         <p className="mt-4 text-lg text-[#6F7CB2] ml-4">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default Section;

import React from "react";

function Section({ imgSrc, title, description }) {
  return (
    <div className="block md:flex items-center md:mt-32 space-x-4">
      {/* Image Container */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-4">
        <img src={imgSrc} alt="" className="w-full h-full md:w-[540px] m-auto justify-center items-center text-center mt-48 md:mt-0" />
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
