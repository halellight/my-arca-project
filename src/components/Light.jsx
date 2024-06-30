import React, { useState, useEffect } from "react";
import Logo from "../assets/Ease.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Back from "../assets/newback.png";
import { ReactTyped } from "react-typed";
import iPhone from "../assets/phone.png";
import Play from "../assets/play.png";
import Apple from "../assets/apple.png";
import Front from "../assets/Desktop.png";
import LightLogo from "../assets/easedark.png";

const backgroundImages = {
  light: `url(${Back})`,
  dark: `url(${Front})`,
};
const logos = {
  light: LightLogo,
  dark: Logo,
};
const Light = () => {
  // Define the background images for the themes

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const handleSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center h-20 w-full mx-auto px-16 py-12 bg-white dark:bg-[#010610]">
        <img src={logos[theme]} alt="logo" className="h-[25px]" />
        <ul className="hidden md:flex ml-[500px] mr-[300px]">
          <li className="p-6 cursor-pointer font-semibold text-m underline">
            Home
          </li>
          <li className="p-6 cursor-pointer font-regular text-m text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white">
            About Us
          </li>
          <li className="p-6 cursor-pointer font-regular text-m text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Our Solution
          </li>
          <li className="p-6 cursor-pointer font-regular text-m text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Career
          </li>
          <li className="p-6 cursor-pointer font-regular text-m text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Events
          </li>
        </ul>
        <div className="gap-3 justify-between items-center flex px-12">
          <button className="bg-black dark:bg-white text-white dark:text-black w-[200px] rounded-md font-medium my-6 mx-1 py-3">
            Contact Us
          </button>
          <button onClick={handleSwitch} className="">
            {theme === "light" ? (
              <MdLightMode size={30} color="#000000" />
            ) : (
              <MdDarkMode size={30} color="#ffffff" />
            )}
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        className="w-full h-120vh bg-cover bg-center"
        // style={{ backgroundImage: `url(${Back})` }}
        style={{ backgroundImage: backgroundImages[theme] }}
      >
        <div className="max-w-[960px] mt-[-15px] w-full h-60vh mx-auto text-center flex flex-col justify-center py-20">
          <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-3 py-6">
            Making Commerce More
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-7xl sm:text-5xl text-4xl font-bold py-6">
              Convenient for
            </p>
            <ReactTyped
              className="md:text-7xl sm:text-5xl text-4xl font-bold pl-3 text-blue-500"
              strings={["Producers.", "Wholesalers.", "Retailers.", "You."]}
              typeSpeed={60}
              backSpeed={20}
              loop
            />
          </div>
          <p className="md:text-xl text-sm font-medium pl-2 py-2 text-gray-400 dark:text-gray-300">
            Using technology to enhance commerce across all distribution
            channels.
          </p>
          <div className="gap-3 items-center justify-center flex px-2">
            {/* <div className="bg-white dark:bg-gray-800 text-black dark:text-white w-[200px] rounded-md my-6 mx-2 py-3 font-medium cursor-pointer flex justify-center items-center border border-gray-400 dark:border-gray-600">
              <img src={Apple} alt="" className="h-[25px]" />
              <div className="px-2">App Store</div>
            </div> */}
            <div className="bg-black dark:bg-white text-white dark:text-black w-[200px] rounded-md my-6 mx-2 py-3 font-medium cursor-pointer flex justify-center items-center">
              {/* <img src={Play} alt="" className="h-[25px]" /> */}
              <div className="px-2">Coming Soon!</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={iPhone}
            alt="/"
            className="h-[312px] md:h-[512px] sm:h-[220px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Light;
