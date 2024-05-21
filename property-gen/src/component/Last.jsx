import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Last = () => {
  return (
    <div>
      <div className="my-10 sm:w-2/4 w-11/12 mx-auto p-4 rounded-3xl bg-red-100 sm:px-10 px-2">
        <h1 className="sm:text-3xl text-2xl font-bold text-center text-white">
          Move from <span className="gotpara">information</span> to{" "}
          <span className="gotpara">insights</span> with Property Genius!
        </h1>
        <button className="flex flex-row justify-center items-center text-white custom-gradient text-lg rounded-full p-2 my-5 mx-auto w-3/4">
          Begin Journey
          <FaArrowRightLong className="ml-3"/>
        </button>
      </div>
    </div>
  );
};

export default Last;
