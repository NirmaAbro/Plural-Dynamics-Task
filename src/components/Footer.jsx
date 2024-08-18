import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#c8d3fd] py-8 w-full">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-28 py-3">
        {/* Left Section */}
        <p className="text-[#939EA4] text-sm mb-4 lg:mb-0">©2023 Yourcompany</p>

        {/* Center Section */}
        <h1 className="text-lg font-bold text-[#3A4374] mb-4 lg:mb-0">
          Landing
        </h1>

        {/* Right Section */}
        <button className="bg-[#111B47] text-primary py-2 px-4 rounded-md">
          Purchase Now
        </button>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Links */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left px-6 lg:px-28">
          <a href="#" className="text-[#939EA4] text-sm">
            Home
          </a>
          <a href="#" className="text-[#939EA4] text-sm">
            About
          </a>
          <a href="#" className="text-[#939EA4] text-sm">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 gap-3 mt-4 lg:mt-0 lg:mr-20">
          <a href="#" className="text-secondary w-4 h-4">
            <FaFacebookF className="text-2xl md:text-2xl" />
          </a>
          <a href="#" className="text-secondary w-4 h-4">
            <FaLinkedinIn className="text-2xl md:text-2xl " />
          </a>
          <a href="#" className="text-secondary w-4 h-4">
            <FaTwitter className="text-2xl md:text-2xl  " />
          </a>
          <a href="#" className="text-secondary w-4 h-4 ">
            <FaYoutube className="text-2xl md:text-2xl " />
          </a>
          <a href="#" className="text-secondary w-4 h-4">
            <FaInstagram className="text-2xl md:text-2xl  " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;



