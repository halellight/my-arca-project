import React, { useState, useEffect } from "react";
import Logo from "../assets/Ease.png";
//eslint-disable-next-line
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Back from "../assets/newback.png";
import { ReactTyped } from "react-typed";
import iPhone from "../assets/phone.png";
import Play from "../assets/play.png";
import Apple from "../assets/apple.png";

const Light = () => {
  // const navigate = useNavigate();
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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <div>
        <div className="flex justify-between items-center h-20 w-[1903px] mx-auto px-16  py-12 bg-[#ffffff] dark:bg-[#010610]">
          <img src={Logo} alt="/" className="h-[25px]" />
          <ul className="hidden md:flex ml-[500px] mr-[300px]">
            <li className="p-6 text-[#000000] cursor-pointer font-semibold text-m underline dark:text-white">
              Home
            </li>
            <li className="p-6 hover:text-[#000000] cursor-pointer font-regular text-m text-gray-400 dark:hover:text-white ">
              About Us
            </li>
            <li className="p-6 hover:text-[#000000] cursor-pointer font-regular text-m text-gray-400 dark:hover:text-white">
              Our Solution
            </li>
            <li className="p-6 hover:text-[#000000] cursor-pointer font-regular text-m  text-gray-400 dark:hover:text-white">
              Career
            </li>
            <li className="p-6 hover:text-[#000000] cursor-pointer font-regular text-m  text-gray-400 dark:hover:text-white">
              Events
            </li>
          </ul>

          <div className="gap-3 justify-between items-center flex px-12 ">
            <button className="bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-1 py-3 text-white dark:bg-white dark:text-black">
              Contact Us
            </button>
            <button onClick={handleSwitch} className="">
              {theme === "dark" ? (
                <MdLightMode size={30} color="#ffffff" />
              ) : (
                <MdDarkMode size={30} color="#000000" />
              )}
            </button>
          </div>
          {/* <p className="hidden md:flex text-[#006BD6] font-semibold p-[12px]">
        Sign Up / Register
      </p> */}
        </div>

        {/* HERO SECTION */}
        <div
          className="w-full h-120vh text-[#12161E] bg-cover bg-center dark:text-white"
          style={{ backgroundImage: `url(${Back})` }}
        >
          <div className="max-w-[950px] mt-[-15px] w-full h-60vh mx-auto text-center flex flex-col justify-center py-20">
            <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-3 py-6">
              Making Commerce More
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-7xl sm:text-5xl text-4xl font-bold py-6">
                Convinient for
              </p>
              <ReactTyped
                className="md:text-7xl sm:text-5xl text-4xl font-bold pl-3 text-[#004EFF]"
                strings={["Producers.", "Individuals.", "You."]}
                typeSpeed={60}
                backSpeed={95}
                loop
              />
            </div>
            <p className="md:text-xl text-sm font-medium pl-2 py-2 text-[#979899]">
              Using technology to enhance commerce across all
              distribution channels.
            </p>

            <div className="gap-3 items-center justify-center flex px-2">
              <div className="bg-[#12161E] w-[200px] rounded-md my-6 mx-2 py-3 text-white font-medium cursor-pointer flex justify-center items-center ">
                <img src={Apple} alt="" className="h-[25px]" />
                <div className="px-2">App Store</div>
              </div>

              <div className="bg-[#ffffff] w-[200px] rounded-md my-6 mx-2 py-3 text-[#010610] font-medium border border-[#282D36] cursor-pointer flex justify-center items-center">
                <img src={Play} alt="" className="h-[25px]" />
                <div className="px-2">Google Play</div>
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
    </div>
  );
};

export default Light;
