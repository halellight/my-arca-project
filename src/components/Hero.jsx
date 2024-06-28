import React from "react";
import Back from "../assets/pexels-shotbyrain-3934623.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      className="w-full h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="max-w-[800px] mt-[-15px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-3">
          Modern payment solutions
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-6xl sm:text-5xl text-4xl font-bold py-2">
            made for
          </p>
          <ReactTyped
            className="md:text-6xl sm:text-5xl text-4xl font-bold pl-3 text-gray-600"
            strings={["Merchants", "Individuals", "Banks"]}
            typeSpeed={60}
            backSpeed={95}
            loop
          />
        </div>
        <p className="md:text-xl text-sm font-medium pl-2 py-2 text-[#424141]">
          Leveraging technology to improve the way commerce is carried out
          across all channels of distribution.
        </p>
        <button className="bg-[#ffffff] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-medium">
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Hero;
