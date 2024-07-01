import { useState } from "react";
import { Link } from "react-router-dom";
import { BsStars, BsList, BsX } from "react-icons/bs";
import logo from "./../assets/propit1.png";
import Dadu from "./../assets/propit2.png";
import Back from "./../assets/back_btn.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white body-font  sm:px-8 px-1">
      <div className="container mx-auto flex flex-wrap sm:p-5 px-5 pt-5 pb-0 justify-between items-start md:flex-row sm:items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img src={logo} alt="Logo" className="w-auto sm:h-8 h-12 " />
        </Link>
        <nav
          className={`relative   flex sm:flex-row flex-col sm:mt-1 mt-20  flex-wrap items-center text-base justify-center md:flex-row transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 hidden md:opacity-100 md:flex"
          }`}
        >
          <Link to="/" className="mr-5 cursor-pointer sm:mb-0 mb-5  beviet ">
            About Us
          </Link>
          <Link to="/" className="mr-5 cursor-pointer sm:mb-0 mb-5 beviet ">
            Builder Forum
          </Link>
          <Link to="/" className="mr-5 cursor-pointer sm:mb-0 mb-5 beviet ">
            Contact us
          </Link>
        </nav>
        <button
          aria-label="Toggle Menu"
          className="inline-flex md:hidden items-center text-[blue]  border-0  sm:px-3 px-0 text-3xl focus:outline-none rounded   md:mt-0"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <BsX />
          ) : (
            <img
              src={Back}
              className="sm:w-[98%] sm:mt-0 mt-1  w-[2.1rem] cursor-pointer"
              alt=""
            />
          )}
        </button>
        <div className="sm:flex hidden flex-row justify-end items-center sm:w-min">
          <img
            src={Back}
            className="sm:w-[98%] w-19 mr-10 cursor-pointer"
            alt=""
          />
          {/* <img src={Back} className="sm:w-[100%] w-20 cursor-pointer" alt="" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
