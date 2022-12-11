import React, { useState } from "react";
import coverImage from "../Images/Rectangle 5-7.png";
import coverImage2 from "../Images/cover2.png";
import coverImage3 from "../Images/Rectangle 5-1.png";
import mobileCoverImage from "../Images/mobileCover1.png";
import mobileCoverImage2 from "../Images/mobilecover2.png";
import mobileCoverImage3 from "../Images/mobileCover3.png";
import profileImage from "../Images/Rectangle 3-4.png";
import profileImage2 from "../Images/Rectangle 3-1.png";
import profileImage3 from "../Images/Rectangle 3-2.png";
import pin from "../Images/pin.jpeg";
import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { BsFillShareFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { RiCalendarEventFill } from "react-icons/ri";

const Posts = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <div className="container mx-auto lg:pl-40 lg:pr-40 md:mt-7">
      <div className="md:flex md:space-x-52">
        {/* posts */}
        <div className="">
          {/* card 1*/}
          <div className="md:w-[40.25rem] md:h-[29.5rem] border border-[#E0E0E0] mb-4 shadow-md">
            {/* image */}
            <img src={coverImage} className="hidden md:flex" alt="coverImage" />
            <img
              src={mobileCoverImage}
              className="flex md:hidden w-full"
              alt="coverImage"
            />
            {/*text content  */}
            <div className="flex flex-col space-y-3 m-5">
              <div className="flex flex-row items-center">
                <img src={pin} className="w-5 h-5" alt="" />
                <span className="font-medium text-lg">Article</span>
              </div>
              {/* header + icon more */}
              <div className="flex items-start">
                <h2 className="md:text-2xl text-xl w-[37.5rem] font-semibold">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h2>
                <BsThreeDots
                  className="text-2xl mt-1"
                  onClick={() => handleShow()}
                />
                {show && (
                  <div className="fixed w-40 right-8 bottom-24  py-[11px] pl-3 bg-white flex flex-col text-sm space-y-3 shadow-md">
                    <span className="cursor-pointer">Edit</span>
                    <span className="cursor-pointer">Report</span>
                    <span className="cursor-pointer">Option 3</span>
                  </div>
                )}
              </div>
              {/* parag */}
              <p className="text-[#5C5C5C] font-normal md:text-lg text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              {/* footer post */}
              <div className="flex items-center justify-between">
                {/* name + pic */}
                <div className="flex items-center space-x-3 mt-8">
                  <img src={profileImage} alt="profileImage" />
                  <div>
                    <span className="md:text-lg text-sm font-semibold">
                      Sarthak Kamra
                    </span>
                    <span className="text-[#525252] flex md:hidden">
                      1.4k views
                    </span>
                  </div>
                </div>
                {/* views + share */}
                <div className="flex space-x-10 items-center mt-8">
                  <div className="flex items-center space-x-2">
                    <IoEyeOutline className="hidden md:block" />
                    <span className="text-[#525252] hidden md:flex">
                      1.4k views
                    </span>
                  </div>
                  <div className="bg-[#EDEEF0] p-3 flex items-center space-x-2">
                    <BsFillShareFill className="text-sm" />
                    <span className="text-xs flex md:hidden">Shere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 2*/}
          <div className="md:w-[40.25rem] md:h-[29.5rem] border border-[#E0E0E0] mb-4 shadow-md">
            {/* image */}
            <img
              src={coverImage2}
              className="hidden md:flex"
              alt="coverImage"
            />
            <img
              src={mobileCoverImage2}
              className="flex md:hidden w-full"
              alt="coverImage"
            />
            {/*text content  */}
            <div className="flex flex-col space-y-3 m-5">
              <div className="flex flex-row items-center">
                <img src={pin} className="w-5 h-5" alt="" />
                <span className="font-medium text-lg">Article</span>
              </div>
              {/* header + icon more */}
              <div className="flex items-start">
                <h2 className="md:text-2xl text-xl w-[37.5rem] font-semibold">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h2>
                <BsThreeDots
                  className="text-2xl mt-1"
                  onClick={() => handleShow()}
                />
                {show && (
                  <div className="fixed w-40 right-8 bottom-24  py-[11px] pl-3 bg-white flex flex-col text-sm space-y-3 shadow-md">
                    <span className="cursor-pointer">Edit</span>
                    <span className="cursor-pointer">Report</span>
                    <span className="cursor-pointer">Option 3</span>
                  </div>
                )}
              </div>
              {/* parag */}
              <p className="text-[#5C5C5C] font-normal md:text-lg text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              {/* footer post */}
              <div className="flex items-center justify-between">
                {/* name + pic */}
                <div className="flex items-center space-x-3 mt-8">
                  <img src={profileImage2} alt="profileImage" />
                  <div>
                    <span className="md:text-lg text-sm font-semibold">
                      Sarah West
                    </span>
                    <span className="text-[#525252] flex md:hidden">
                      1.4k views
                    </span>
                  </div>
                </div>
                {/* views + share */}
                <div className="flex space-x-10 items-center mt-8">
                  <div className="flex items-center space-x-2">
                    <IoEyeOutline className="hidden md:block" />
                    <span className="text-[#525252] hidden md:flex">
                      1.4k views
                    </span>
                  </div>
                  <div className="bg-[#EDEEF0] p-3 flex items-center space-x-2">
                    <BsFillShareFill className="text-sm" />
                    <span className="text-xs flex md:hidden">Shere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 3*/}
          <div className="md:w-[40.25rem] md:h-[33.5rem] border border-[#E0E0E0] mb-4 shadow-md">
            {/* image */}
            <img
              src={coverImage3}
              className="hidden md:flex"
              alt="coverImage"
            />
            <img
              src={mobileCoverImage3}
              className="flex md:hidden w-full"
              alt="coverImage"
            />
            {/*text content  */}
            <div className="flex flex-col space-y-3 m-5">
              <div className="flex flex-row items-center">
                <img src={pin} className="w-5 h-5" alt="" />
                <span className="font-medium text-lg">Article</span>
              </div>
              {/* header + icon more */}
              <div className="flex items-start">
                <h2 className="md:text-2xl text-xl w-[37.5rem] font-semibold">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h2>
                <BsThreeDots
                  className="text-2xl mt-1"
                  onClick={() => handleShow()}
                />
                {show && (
                  <div className="fixed w-40 right-8 bottom-24  py-[11px] pl-3 bg-white flex flex-col text-sm space-y-3 shadow-md">
                    <span className="cursor-pointer">Edit</span>
                    <span className="cursor-pointer">Report</span>
                    <span className="cursor-pointer">Option 3</span>
                  </div>
                )}
              </div>
              {/* clandar */}
              <div className="flex items-center space-x-12">
                <div className="flex space-x-1 items-center">
                  <RiCalendarEventFill />
                  <span className="font-medium">Fri, 12 Oct, 2018</span>
                </div>
                <div className="flex space-x-1 items-center">
                  <GoLocation />
                  <span className="font-medium">Ahmedabad, India</span>
                </div>
              </div>
              {/* visit website button */}
              <div className="border py-3 text-center">
                <button className=" text-[#02B875] font-medium">
                  Apply on Timesjobs
                </button>
              </div>
              {/* footer post */}
              <div className="flex items-center justify-between">
                {/* name + pic */}
                <div className="flex items-center space-x-3 mt-4">
                  <img src={profileImage3} alt="profileImage" />
                  <div>
                    <span className="md:text-lg text-sm font-semibold">
                      Ronal Jones
                    </span>
                    <span className="text-[#525252] flex md:hidden">
                      1.4k views
                    </span>
                  </div>
                </div>
                {/* views + share */}
                <div className="flex space-x-10 items-center mt-8">
                  <div className="flex items-center space-x-2">
                    <IoEyeOutline className="hidden md:block" />
                    <span className="text-[#525252] hidden md:flex">
                      1.4k views
                    </span>
                  </div>
                  <div className="bg-[#EDEEF0] p-3 flex items-center space-x-2">
                    <BsFillShareFill className="text-sm" />
                    <span className="text-xs flex md:hidden">Shere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 4*/}
          <div className="md:w-[40.25rem] md:h-[29.5rem] border border-[#E0E0E0] mb-4 shadow-md">
            {/* image */}
            <img src={coverImage} className="hidden md:flex" alt="coverImage" />
            <img
              src={mobileCoverImage}
              className="flex md:hidden w-full"
              alt="coverImage"
            />
            {/*text content  */}
            <div className="flex flex-col space-y-3 m-5">
              <div className="flex flex-row items-center">
                <img src={pin} className="w-5 h-5" alt="" />
                <span className="font-medium text-lg">Article</span>
              </div>
              {/* header + icon more */}
              <div className="flex items-start">
                <h2 className="md:text-2xl text-xl w-[37.5rem] font-semibold">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h2>
                <BsThreeDots
                  className="text-2xl mt-1"
                  onClick={() => handleShow()}
                />
                {show && (
                  <div className="fixed w-40 right-8 bottom-24  py-[11px] pl-3 bg-white flex flex-col text-sm space-y-3 shadow-md">
                    <span className="cursor-pointer">Edit</span>
                    <span className="cursor-pointer">Report</span>
                    <span className="cursor-pointer">Option 3</span>
                  </div>
                )}
              </div>
              {/* parag */}
              <p className="text-[#5C5C5C] font-normal md:text-lg text-base">
                I've worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              {/* footer post */}
              <div className="flex items-center justify-between">
                {/* name + pic */}
                <div className="flex items-center space-x-3 mt-8">
                  <img src={profileImage} alt="profileImage" />
                  <div>
                    <span className="md:text-lg text-sm font-semibold">
                      Sarthak Kamra
                    </span>
                    <span className="text-[#525252] flex md:hidden">
                      1.4k views
                    </span>
                  </div>
                </div>
                {/* views + share */}
                <div className="flex space-x-10 items-center mt-8">
                  <div className="flex items-center space-x-2">
                    <IoEyeOutline className="hidden md:block" />
                    <span className="text-[#525252] hidden md:flex">
                      1.4k views
                    </span>
                  </div>
                  <div className="bg-[#EDEEF0] p-3 flex items-center space-x-2">
                    <BsFillShareFill className="text-sm" />
                    <span className="text-xs flex md:hidden">Shere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* location */}
        <div className="hidden xl:block">
          {/* location */}
          <div className="flex items-center justify-between space-x-32">
            <div className="flex items-center">
              <GoLocation className="w-8 h-5" />
              <span className="text-sm">Noida, India</span>
            </div>
            <MdModeEdit className="w-8 h-5" />
          </div>
          {/* border */}
          <div className="border-b border-[#B8B8B8] h-5 w-64"></div>
          {/* description for location */}
          <div className="flex mt-8 space-x-2 items-start text-[#8A8A8A]">
            <CgDanger className="w-8 h-5 mt-px" />
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
          {/* test  */}
        </div>
      </div>
    </div>
  );
};

export default Posts;


/**
 * box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08);
 */


/**
 * <div className="py-[11px] pl-3 bg-white flex flex-col text-sm space-y-3 shadow-md">
            <span>Edit</span>
            <span>Report</span>
            <span>Option 3</span>
          </div>
 */