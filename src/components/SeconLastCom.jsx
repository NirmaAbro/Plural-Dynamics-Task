import React from "react";

function SeconLastCom() {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center py-28 bg-[#E7ECFF] mt-48 m-0 ">
      <h1 className="text-3xl text-secondary">A Price To Suit Everyone</h1>
      <p className="text-[#6F7CB2] w-full md:w-1/2 md:pt-4 text-justify p-3 ">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>

      <h1 className="text-3xl text-secondary pt-8">$40</h1>
      <p className="text-secondary mt-2">UI Design Kit</p>

      <p className="text-[#6F7CB2] pt-8">See, One price. Simple.</p>
      <button className="bg-secondary px-6 py-3 pt-4 text-white m-2">
        Purchase Now
      </button>
    </div>
  );
}

export default SeconLastCom;
