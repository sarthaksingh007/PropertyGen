// import React from "react";
import Logo from "./../assets/logo.png";
import Dadu from "./../assets/ellipse.png";
import navBtn from "./../assets/back_btn.png";
const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className=" mx-auto flex  flex-row items-center justify-between sm:px-16 px-4 py-5">
          <img src={Logo} alt="" className="cursor-pointer sm:w-1/6 w-2/5 mr-6"/>
          <div className="flex flex-row justify-end items-center">
            <img src={Dadu} alt="" className="cursor-pointer sm:w-1/6 w-1/5 mr-6"/>
            <img src={navBtn} alt="" className="cursor-pointer sm:w-1/6 w-1/5"/>
          </div>
          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
