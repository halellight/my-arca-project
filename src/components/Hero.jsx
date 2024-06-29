import React from "react";
import Back from "../assets/Desktop.png";
import { ReactTyped } from "react-typed";
import iPhone from "../assets/phone.png";
import Play from "../assets/play.png";
import Apple from "../assets/apple.png";
const Hero = () => {
  return (
    <div
      className="w-full h-120vh text-white bg-cover bg-center"
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
          Using technology to enhance commerce across all distribution channels.
        </p>

        <div className="gap-3 items-center justify-center flex px-2">
          <div className="bg-[#ffffff] w-[200px] rounded-md my-6 mx-2 py-3 text-black font-medium cursor-pointer flex justify-center items-center ">
            <img src={Apple} alt="" className="h-[25px]" />
            <div className="px-2">App Store</div>
          </div>

          <div className="bg-[#010610] w-[200px] rounded-md my-6 mx-2 py-3 text-white font-medium border border-[#282D36] cursor-pointer flex justify-center items-center">
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
  );
};

export default Hero;
