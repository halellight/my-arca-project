import React from "react";
import Triple from "../assets/IMG_3264.png";
import Single from "../assets/ike.png";
import Double from "../assets/IMG_3276.png";
const Second = () => {
  return (
    <div className="w-full py-[10rem] px-0 bg-white">
      <div className="w-full mx-auto grid md:grid-cols-3 gap-0">
        <img
          className="w-410 h-[500px] mx-auto mt-[-3rem] py-6 h-800 bg-white"
          src={Single}
          alt="/"
        />

        <img
          className="w-400 mt-[-70px] bg-transparent h-[500px] mx-auto  bg-white"
          src={Double}
          alt="/"
        />
        <img
          className="w-410 h-[500px] mx-auto mt-[-3rem] py-6 bg-white"
          src={Triple}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Second;
