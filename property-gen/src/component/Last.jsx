import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ChatbotContext } from "../chatContext";
const Last = () => {
  const { setShowChatbot, showChatbot } = useContext(ChatbotContext);
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };
  return (
    <div className="hero3">
      <div
        style={shadowStyle}
        className="my-10 sm:w-2/4 w-11/12 mx-auto p-4 rounded-3xl bg-[#2b292959] sm:px-10 px-2 "
      >
        <h1 className="sm:text-3xl text-2xl font-bold text-center text-white">
          Move from <span className="gotpara">information</span> to{" "}
          <span className="gotpara">insights</span> with Property Genius!
        </h1>
        <button onClick={()=>{setShowChatbot(true)}} className="flex flex-row justify-center items-center text-white custom-gradient text-lg rounded-full p-2 my-5 mx-auto w-3/4">
          Begin Journey
          <FaArrowRightLong className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Last;
