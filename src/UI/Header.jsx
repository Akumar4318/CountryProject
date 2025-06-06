import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Country from "../pages/Country";
import Contact from "../pages/Contact";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-100 to-gray-300  w-full flex place-content-between p-3">
      <div className="text-white">WorldAtlas</div>

      <div className="text-black  w-1/3 ">
        <ul className="flex   place-content-evenly  ">
          <li className="hover:text-red-500 ">
            <Link to="/" element={<Home />}>
              Home
            </Link>
            <div className=" cursor-pointer transform -translate-y-1/2 w-auto h-[4px] bg-red-500 transition-all duration-500 hover:translate-x-1/2">

          </div>
          </li>
          
          <li>
            <Link to="/about" element={<About />}>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/country" element={<Country />}>
              Country
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact" element={<Contact />}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
