import React from "react";
import landing from "../Images/landing.png";
import landingMobile from "../Images/landing.png";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Landing = () => {
  return (
    <div className="h-[14.75rem] md:h-[27.5rem] mb-6 relative overflow-hidden">
      <img
        src={landing}
        className="absolute z-10 w-full h-[27.5rem] hidden md:flex"
        alt="landing"
      />
      <img
        src={landingMobile}
        className="absolute z-10 w-full h-[14.75rem] flex md:hidden"
        alt="landing"
      />
      <div className=" text-white mt-5 absolute z-30 w-full mx-4 flex items-center justify-between md:hidden">
        <AiOutlineArrowLeft />
        <button className="text-xs border rounded p-2 mr-12">Join Group</button>
      </div>
      <div className=" text-white absolute z-20 mt-40 ml-4 lg:ml-52 lg:mt-72 md:ml-16  md:mt-64">
        <h1 className="md:text-4xl text-base">Computer Engineering</h1>
        <span className="md:text-lg text-xs">
          142,765 Computer Engineers follow this
        </span>
      </div>
    </div>
  );
};

export default Landing;

/**
 * .image::before {
    content: "";
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    height: 440px;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%);
}
 */
