//eslint-disable-next-line
import React, { useState } from "react";
import Logo from "../assets/Ease.png";
//eslint-disable-next-line
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Mainnav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 w-[1903px] mx-auto px-16  py-12 bg-[#010610]">
      <img src={Logo} alt="/" className="h-[25px]" />
      <ul className="hidden md:flex ml-[500px] mr-[300px]">
        <li className="p-6 text-[#ffffff] cursor-pointer font-semibold text-m underline">
          Home
        </li>
        <li className="p-6 hover:text-[#ffffff] cursor-pointer font-regular text-m text-gray-400 ">
          About Us
        </li>
        <li className="p-6 hover:text-[#ffffff] cursor-pointer font-regular text-m text-gray-400">
          Our Solution
        </li>
        <li className="p-6 hover:text-[#ffffff] cursor-pointer font-regular text-m  text-gray-400 ">
          Career
        </li>
        <li className="p-6 hover:text-[#ffffff] cursor-pointer font-regular text-m  text-gray-400">
          Events
        </li>
      </ul>

      <div className="gap-3 justify-between items-center flex px-12 ">
        <button className="bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-1 py-3 text-black">
          Contact Us
        </button>
        <MdDarkMode size={30} color="#ffffff" />{" "}
      </div>
      {/* <p className="hidden md:flex text-[#006BD6] font-semibold p-[12px]">
        Sign Up / Register
      </p> */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color="#ffffff" />
        ) : (
          <AiOutlineMenu size={20} color="#ffffff" />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r bg-[#010610] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={Logo} alt="/" className="h-[100px] mt-4 ml-4" />
        <ul className="p-4 text-m">
          <li className="p-4 font-semibold border-b border-gray-600">Home</li>
          <li className="p-4 font-semibold border-b border-gray-600">
            About Us
          </li>
          <li className="p-4 font-semibold border-b border-gray-600">
            Our Solutions
          </li>
          <li className="p-4 font-semibold border-b border-gray-600">Career</li>
          <li className="p-4 font-semibold border-b border-gray-600">Events</li>
          <li className="p-4 font-semibold border-b border-gray-600">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mainnav;
