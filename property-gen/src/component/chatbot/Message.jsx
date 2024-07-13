import Copilot1 from "../../assets/propit2.png"; // Update the path to your actual image
import Profile from "../../assets/profile.jpeg"; // Update the path to your actual image
import AnimatedText from "../chatbot/AnimatedText"; // Update the path to your actual component
import React, { useRef, useEffect } from "react";

const Message = ({ msg ,scrollIntoView}) => {
    const messageRef = useRef(null);

    useEffect(() => {
      if (scrollIntoView) {
        messageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, [scrollIntoView]);

  if (msg.isUser) {
    return (
      <div className="user-message m-1 p-1 text-right">
        <div className="flex flex-col justify-start items-end">
          <div className="flex flex-row justify-end items-end sm:w-3/4">
            <span className="flex flex-col justify-start items-center">
              <div className="w-full mb-2 p-1 text-white rounded-md bg-[#685ABF]">
                {msg.text}
              </div>
            </span>
            <div className="flex flex-row justify-between items-center my-1">
              <img
                src={Profile}
                loading="lazy"
                alt="User Profile"
                className="mr-1 p-1 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chatbot-message m-1 p-1" ref={messageRef}>
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row justify-start items-start">
            <img
              src={Copilot1}
              loading="lazy"
              alt="Chatbot Profile"
              className="mr-1 w-6"
            />
            <span className="flex flex-col justify-start items-start">
              <div className="sm:w-[100%] w-full mb-2 flex flex-col justify-start items-start p-1 bg-[#E2E0EF] rounded-md">
                <AnimatedText message={msg.text} />
              </div>
            </span>
            {/* <div ref={messageEndRef}></div> */}
          </div>
        </div>
      </div>
    );
  }
};

export default Message;
