// import React from "react";
// import img from "../images/undraw_happy_news_hxmt.svg";

// function SectionThree() {
//   return (
//     <div className="block md:flex items-center md:mt-28 mt-48 ">
//       {/* for img  */}
//       <div className="justify-center items-center m-3">
//         <img src={img} alt="" className="w-full h-full m-auto " />
//       </div>
//       {/* for text  */}
//       <div className="justify-center items-center leading-2 ">
//         <h1 className="text-3xl font-medium leading-tight text-secondary ml-4">
//           Light, Fast & Powerful
//         </h1>
//         <p className="mt-4 text-lg text-[#6F7CB2] ml-4 ">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//           commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
//           et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
//           felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
//           consequat massa quis enim.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SectionThree;
import React from "react";
import img from "../images/undraw_happy_news_hxmt.svg";

function SectionThree() {
  return (
    <div className="block md:flex items-center md:mt-28 mt-36">
      {/* Image Container */}
      <div className="md:w-1/2 justify-center items-center m-3">
        <img src={img} alt="" className="w-full h-full m-auto md:w-2/4" />
      </div>
      {/* Text Content */}
      <div className="md:w-1/2 justify-center items-center leading-2 mt-12 md:mt-0">
        <h1 className="text-3xl font-medium leading-tight text-secondary ml-4">
          Light, Fast & Powerful
        </h1>
        <p className="mt-4 text-lg text-[#6F7CB2] ml-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
    </div>
  );
}

export default SectionThree;
