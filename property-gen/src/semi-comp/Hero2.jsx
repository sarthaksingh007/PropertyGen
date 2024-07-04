// import React, { useState } from "react";
import m1 from "./../assets/1.png";
import m2 from "./../assets/2.png";
import m3 from "./../assets/3.png";
import m4 from "./../assets/4.png";
import m5 from "./../assets/5.png";
import m6 from "./../assets/6.png";
const Hero2 = () => {
  return (
    <>
      {/* <div className="mt-6">
        <p className="text-gray-300 my-3 sm:text-xl text-lg w-11/12 ml-auto">
          Trending Prompts
        </p>
        <div className="ml-[24px]">
          <div className="flex flex-row justify-evenly items-center overflow-x-auto sm:overflow-x-hidden w-full">
            {[
              { id: "#01", text: "2BHK apartments in Dubai" },
              { id: "#02", text: "Office Spaces in London" },
              { id: "#03", text: "Rent or sell my house?" },
              { id: "#04", text: "Residential or Commercial?" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-row justify-between items-center whitespace-nowrap rounded-full m-2 "
              >
                <p className="gradient text-white sm:p-2 p-3 sm:text-lg text-base font-semibold rounded-full">
                  {item.id}
                </p>
                <p className="text-black p-2 sm:text-lg text-sm font-lightbold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="mt-6">
        <p className="text-white sm:pl-[4.5rem] pl-[1.3rem] p-1 m-1 my-3 sm:text-xl text-lg w-[98%] ml-auto">
          Our features
        </p>
        <div className="">
          <div className="flex sm:pl-[4.5rem] pl-[1.3rem]  flex-row justify-evenly items-center overflow-x-auto  w-full">
            {[
              { imgs: m1 },
              { imgs: m2 },
              { imgs: m3 },
              { imgs: m4 },
              { imgs: m5 },
              { imgs: m6 },
            ].map((item, index) => (
              <img
                width="300"
                height="200"
                sizes="(max-width: 640px) 30vw, 200px"
                // loading="lazy"
                key={index}
                className="sm:w-[15%] w-[40%] sm:p-2 sm:m-2 p-1 m-1"
                src={item.imgs}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
