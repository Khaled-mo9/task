import React from "react";
import logo from "../Images/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="h-[4.5rem] w-full  items-center hidden sm:flex">
      <div className="flex items-center flex-row justify-between w-full px-16">
        {/* logo */}
        <div className="flex items-center">
          <span className="text-logoColor text-xl">ATG.</span>
          <span className="text-xl">W</span>
          <img src={logo} className="w-5 h-5" alt="" />
          <span className="text-xl">RLD</span>
        </div>
        {/* search */}
        <div className="flex items-center border rounded-2xl p-2 bg-[#F2F2F2]">
          <AiOutlineSearch className="" />
          <input
            className="ml-5 outline-none bg-[#F2F2F2] lg:w-[22.5rem] md:w-[12.5rem] sm:w-[10.5rem]"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </div>
        {/* login */}
        <div className="hidden md:flex items-center">
          <span className="">Create account.</span>
          <span className="text-[#2F6CE5] fw-bold cursor-pointer">
            It's Free
          </span>
          <MdOutlineArrowDropDown />
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
