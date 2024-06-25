import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { RiLoginBoxFill } from "react-icons/ri";
import Block from "./../assets/block.png";
import Block1 from "./../assets/block1.png";
import Block2 from "./../assets/block2.png";

const items = [
  {
    location: "Gurgaon, Sector 24",
    viewing: "3324 viewing",
    title: "M3M Paragon",
    spaces: ["Retail Space", "Office Space"],
    rating: 4,
    Imaging: Block,
  },
  {
    location: "Gurgaon, Sector 24",
    viewing: "3324 viewing",
    title: "M3M Paragon",
    spaces: ["Retail Space", "Office Space"],
    rating: 4,
    Imaging: Block1,
  },
  {
    location: "Gurgaon, Sector 24",
    viewing: "3324 viewing",
    title: "M3M Paragon",
    spaces: ["Retail Space", "Office Space"],
    rating: 4,
    Imaging: Block2,
  },
];

const Hero3 = () => {
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };

  return (
    <div>
      <div
        className="flex sm:flex-row flex-col justify-between sm:p-2 p-2 sm:w-4/5 w-11/12 mx-auto my-8 rounded-2xl  items-center bg-opacity-85 bg-[#2b292959]"
        style={shadowStyle}
      >
        {/* {items.map((item, index) => (
          <div
            key={index}
            className={`p-3 flex flex-col sm:w-[28%] w-full justify-between sm:h-96 h-58  sm:m-2 sm:my-4 my-2 rounded-2xl ${
              index === 0
                ? "takelook"
                : index === 1
                ? "takelook1"
                : index === 2
                ? "takelook2"
                : ""
            }`}
          >
            <div className="flex flex-row items-center justify-between ">
              <p className="flex flex-row justify-center items-center text-white ">
                <HiOutlineLocationMarker />
                {item.location}
              </p>
              <p className="flex flex-row justify-center items-center text-white ">
                <MdOutlineRemoveRedEye />
                {item.viewing}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start my-3 mx-5">
              <h1 className="text-white text-3xl font-bold my-2">
                {item.title}
              </h1>
              <ul className="list-disc text-white flex flex-row justify-between items-center">
                {item.spaces.map((space, index) => (
                  <li key={index} className="mx-4">
                    {space}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-between items-center text-lg">
                <Rating name="read-only" value={item.rating} readOnly />
                <p className="text-white">636 viewing</p>
              </div>
            </div>
            <button className="flex flex-row justify-center items-center text-white custom-gradient text-lg rounded-full p-4 sm:mx-auto mr-auto w-3/4">
              <RiLoginBoxFill />
              Take a look
            </button>
            
          </div>
        ))} */}
        <img src={Block2} alt="" />
        <img src={Block1} alt="" />
        <img src={Block} alt="" />
      </div>
    </div>
  );
};

export default Hero3;
