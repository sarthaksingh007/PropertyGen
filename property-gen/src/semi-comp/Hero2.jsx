// import React, { useState } from "react";

const Hero2 = () => {
  return (
    <>
      <div className="mt-6">
        <p className="text-gray-300 my-3 sm:text-xl text-lg w-11/12 ml-auto">
          Trending Prompts
        </p>
        <div className="ml-[24px]">
          <div className="flex flex-row justify-evenly items-center overflow-x-auto sm:overflow-x-hidden w-full">
            {[
              { id: "#01", text: "2BHK apartments with returns" },
              { id: "#02", text: "Office Space with high returns" },
              { id: "#03", text: "Residential or Commercial?" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-row justify-between items-center whitespace-nowrap rounded-full m-2 "
              >
                <p className="gradient text-white sm:p-2 p-3 sm:text-lg text-base font-semibold rounded-full">
                  {item.id}
                </p>
                <p className="text-black p-2 sm:text-lg text-sm font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
