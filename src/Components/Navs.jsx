import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const Navs = () => {
  return (
    <div className="container mx-auto lg:pl-40  w-full justify-between lg:pr-40 mt-4 flex items-center">
      {/* navs */}
      <nav className="space-x-5 hidden md:flex">
        <a className="text-black" href="#">
          All Posts(32)
        </a>
        <a className="text-[#8A8A8A]" href="#">
          Article
        </a>
        <a className="text-[#8A8A8A]" href="#">
          Event
        </a>
        <a className="text-[#8A8A8A]" href="#">
          Education
        </a>
        <a className="text-[#8A8A8A]" href="#">
          Job
        </a>
      </nav>
      {/* buttons */}
      <div className="space-x-4 hidden md:flex">
        <div className="flex items-center space-x-3 bg-[#EDEEF0] py-2 pl-3 pr-5 rounded">
          <button className="font-medium">Write a Post</button>
          <MdOutlineArrowDropDown className="mr-5" />
        </div>
        <div className="flex items-center text-white space-x-3 bg-[#2F6CE5] rounded py-2 pl-3 pr-5">
          <AiOutlineUsergroupAdd className="font-bold mr-2" />
          <button className="font-medium">Join Group</button>
        </div>
      </div>
      {/* for mobile */}
      <div className="flex md:hidden w-full items-center justify-between mx-4 mb-4">
        <span className="font-bold text-sm">Posts(368)</span>
        <div className="flex items-center space-x-3 bg-[#EDEEF0] py-2 pl-3 pr-5 rounded">
          <button className="font-medium text-sm">Filter: All</button>
          <MdOutlineArrowDropDown className="mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Navs;
