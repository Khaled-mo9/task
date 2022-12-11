import React, { useState } from "react";
import sign from "../Images/signin.png";
import { GrFormClose } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import google from '../Images/google.png'
import facebook from "../Images/facebook.png";
const Login = () => {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  const togglerFun = () => {
    setToggle(!toggle);
  };
  const togglerShow = () => {
    setShow(!show);
  };
  return (
    <>
      {!show && (
        <div className="bg-black opacity-60 w-screen h-screen fixed z-40"></div>
      )}
      <div className="fixed md:hidden cursor-pointer bottom-5 right-5 bg-gradient-to-r p-4 rounded-full from-purple-500 to-pink-500">
        <MdModeEditOutline className="text-white text-2xl" />
      </div>
      {!show && (
        <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-end mb-3">
            <GrFormClose
              className="w-7 h-7 bg-[#8A8A8A] rounded-full cursor-pointer text-white"
              onClick={() => togglerShow()}
            />
          </div>
          <div className="md:w-[736px] h-screen w-screen mt-80 md:mt-0 md:h-[530px] rounded-tr-2xl rounded-tl-2xl bg-white shadow-2xl md:rounded ">
            <p className="text-[#008A45]  py-4 text-center bg-[#EFFFF4] mb-2 hidden md:block">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <div className="mx-9">
              <div className="flex flex-col space-y-2 pt-6 md:pt-0">
                <div className="flex justify-between items-center">
                  {toggle ? (
                    <h2 className="text-2xl">Create Account</h2>
                  ) : (
                    <h2 className="text-2xl">Sign in</h2>
                  )}
                  <div className="flex md:hidden justify-end mb-3">
                    <GrFormClose
                      className="w-7 h-7 bg-[#8A8A8A] rounded-full cursor-pointer text-white"
                      onClick={() => togglerShow()}
                    />
                  </div>
                  <div className="hidden md:flex">
                    <span>
                      {toggle
                        ? "Already have an account?"
                        : "Dont have an account yet?"}
                    </span>
                    {toggle ? (
                      <span
                        className="text-[#2F6CE5] cursor-pointer"
                        onClick={() => togglerFun()}
                      >
                        Sign In
                      </span>
                    ) : (
                      <span
                        className="text-[#2F6CE5] cursor-pointer"
                        onClick={() => togglerFun()}
                      >
                        Create new for free!
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {/* inputs */}
                  <div className="md:w-[320px] w-full">
                    {toggle && (
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="border py-4 pl-3 w-full md:w-[160px]"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="border py-4 pl-3 w-full md:w-[160px]"
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <input
                        type="email"
                        placeholder="Email"
                        className="border py-4 pl-3"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="border py-4 pl-3"
                      />
                      {toggle && (
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="border py-4 pl-3"
                        />
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="bg-[#2F6CE5] w-max sm:px-6 md:w-full rounded-2xl text-white px-4 py-2 mt-3">
                        {toggle ? "Create Account" : "Sign in"}
                      </button>
                      <span
                        className="text-[#495057] font-medium flex md:hidden border-b cursor-pointer"
                        onClick={() => togglerFun()}
                      >
                        or, SignIn
                      </span>
                    </div>
                    <div className="flex items-center w-full  border text-black py-2 mt-3 justify-center space-x-3">
                      <img src={facebook} alt="" />
                      <button className="">Sign up with Facebook</button>
                    </div>
                    <div className="flex items-center w-full  border text-black py-2 mt-3 justify-center space-x-3">
                      <img src={google} alt="" />
                      <button className="">Sign up with Google</button>
                    </div>
                
                    {toggle && (
                      <div className="flex md:hidden justify-center w-full mt-4">
                        <span>
                          By signing up, you agree to our Terms & conditions,
                          Privacy policy
                        </span>
                      </div>
                    )}
                    {!toggle && (
                      <div className="font-medium text-center mt-3">
                        Forgot Password?
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex flex-col space-y-3">
                    <img src={sign} alt="" />
                    <span className="text-xs text-[#8A8A8A]">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
