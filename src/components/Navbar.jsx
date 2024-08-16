import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <ul className="hidden md:flex space-x-6 ">
          {navlinks.map((link, index) => (
            <li className="text-secondary font-medium" key={index}>
              <Link
                to={link.path}
                smooth={true}
                duration={500} // Duration of the scroll
                className="cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Landing Text */}
        <div className="text-lg font-bold text-secondary ">Landing</div>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="bg-secondary text-white px-4 py-2 rounded-md ">
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="block text-secondary font-medium">
              {navlinks.map((link, index) => (
                <li className="text-secondary font-medium" key={index}>
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* bottom Button */}
            <button className="mt-2 bg-secondary text-white px-4 py-2 w-full rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
