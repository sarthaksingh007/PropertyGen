import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { animate } from "framer-motion";
import axios from "axios";
import "./chatbot.css";

import Copilot1 from "./../../assets/propit2.png";

import { ChatbotContext } from "../../../src/chatContext.jsx";

import search from "./../../assets/search.png";
import { TbDots } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiMicrophone } from "react-icons/ti";
import { GrCopy } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import Message from "./Message.jsx";
// import PropertyList from "../../../component/PropertyList.jsx";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showplaceholder, setShowplaceholder] = useState(true);
  const [dataShow, setDataShow] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [botReplyMarkdown, setBotReplyMarkdown] = useState(""); // State to hold bot's reply in Markdown format
  const [leadId, setLeadId] = useState("");
  const { setShowChatbot, showChatbot } = useContext(ChatbotContext);

  // For the buffer memory
  const [bufferMemory, setBufferMemory] = useState([]);
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };

  // Making lead id such that the lead id is generated only once
  // const api_url = "https://vercel-pexapi.vercel.app/";
  const api_url = "http://localhost:10000/api/";
  // const api_url = "http://localhost:5000/";

  useEffect(() => {
    // Function to fetch the leadId
    const fetchLeadId = async () => {
      try {
        const response = await fetch(api_url + "fetch-ip");
        const ip = await response.text();
        console.log("User IP: ", ip);
        const currDate = new Date();
        const date_time = currDate.toISOString();
        const newLeadId = date_time + ip;
        setLeadId(newLeadId);
        console.log(`The new lead is: ${newLeadId}`);
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    // Call fetchLeadId function
    fetchLeadId();
  }, []);

  const saveHistory = async () => {
    const url = api_url + "update-chat-history";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lead_id: leadId,
          chat_history: chatHistory,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error("Failed to save history", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  // Function that fetches the message from the API ('/chat')
  const sendMessage = async () => {
    const userInput = inputText.trim();
    if (!userInput) return;

    // appending user message to chat history
    const updatedChatHistory = [
      ...chatHistory,
      { role: "user", content: userInput },
    ];
    setChatHistory(updatedChatHistory);

    try {
      setIsLoading(true);

      const response = await axios.post(
        api_url + "send-message",
        {
          chat_history: updatedChatHistory,
          buffer_memory: bufferMemory,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      // Setting the buffer memory
      setBufferMemory(data.buffer_memory);

      console.log(`reply is ${data["bot_reply"]}`);
      const botReply = data["bot_reply"];
      // const botReply = data.chat_history[1].content;

      // Pushing the chatbot's reply to the chat history
      updatedChatHistory.push({ role: "assistant", content: botReply });
      setChatHistory(updatedChatHistory);
      setIsLoading(false);
      setInputText("");

      // Set bot's reply in Markdown format
      setBotReplyMarkdown(`\`\`\`${botReply}\`\`\``);

      const filteredMessages = updatedChatHistory.filter(
        (message) => message.role === "user" || message.role === "assistant"
      );
      setMessages(
        filteredMessages.map((message) => ({
          text: message.content,
          isUser: message.role === "user",
        }))
      );
      // Calling the save history function to save the updated chat history
      saveHistory();
      return data["bot_reply"];
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handledatashow();
    sendMessage();
    setShowplaceholder(false);
    setLoadingData(true);
    // sendChatHistoryToBackend();
  };

  // const handleButtonClick = (value) => {
  //   handledatashow();
  //   setInputText(value);
  //   sendMessage();
  // };

  const handledatashow = () => {
    setDataShow(true);
  };

  // On component mount, add the initial prompt to chat history
  React.useEffect(() => {
    setChatHistory([
      {
        role: "system",
        content: "",
      },
    ]);
  }, []);

  const [placeholder, setPlaceholder] = useState("");
  const questions = useMemo(
    () => [
      "Should I rent or sell my house?",
      "How to find the best deals?",
      "Which neighborhoods are up-and-coming?",
      "What are current real estate trends?",
      "What is my property worth now?",
    ],
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    const animateText = async () => {
      const phrase = questions[currentIndex];

      // Animate from empty string to full phrase
      await animate(0, phrase.length, {
        onUpdate: (latest) => {
          setPlaceholder(phrase.slice(0, latest));
        },
        delay: 0.5,
        duration: 0.5,
      });

      // Wait for 2 seconds after displaying full phrase
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Animate from full phrase to empty string
      await animate(phrase.length, 0, {
        onUpdate: (latest) => {
          setPlaceholder(phrase.slice(0, latest));
        },
        delay: 0.2,
        duration: 0.5,
      });

      currentIndex = (currentIndex + 1) % questions.length;
    };

    const animationInterval = setInterval(animateText, 3500); // Run animation every 3.5 seconds

    return () => clearInterval(animationInterval); // Clean up interval on component unmount
  }, [questions]);
  // const text = "PEx AI is thinking....";
  const handleshow = () => {
    setShowChatbot(true);
    console.log(showChatbot);
  };
  const defaultChatbotMessage = {
    text: "How can I help you today?",
    isUser: false,
  };

  return (
    <div
      className={
        showChatbot
          ? "dm mx-auto sm:w-full w-full purple-gradient bg-opacity-100 rounded-lg border-1 border-[#D6D6E6] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] pb-4"
          : "dm mx-auto sm:w-2/4"
      }
    >
      <div
        className={
          showChatbot
            ? "bg-[#685ABF] p-3 rounded-t-[2.5rem] sticky top-0 w-full pt-5 z-20"
            : "bg-[#685ABF] rounded-lg z-20 hidden pt-5"
        }
      >
        <div className="flex flex-row justify-between items-center">
          <FaArrowLeftLong
            onClick={() => setShowChatbot(false)}
            className="text-white text-xl"
          />
          <div className="flex items-center flex-col">
            <h1 className="text-white text-lg">Propit AI</h1>
            <div className="flex flex-row justify-center items-center">
              <div className="bg-green-600 rounded-full p-1 m-1"></div>
              <p className="text-white text-sm">Online</p>
            </div>
          </div>
          <TbDots className="text-white text-2xl" />
        </div>
      </div>
      <div
        className={
          showChatbot
            ? "messages-container pb-[4rem] z-30 relative rounded-t-[2.5rem] sm:h-[80vh] h-[80vh] mx-auto sm:w-full w-full rounded-3xl my-2 overflow-auto bg-white"
            : "messages-container pb-[4rem] z-30 relative rounded-t-[2.5rem] sm:h-50 h-[30vh] mx-auto sm:w-full w-full rounded-3xl my-2 overflow-auto hidden bg-white"
        }
      >
        <div className="h-auto">
          <div className="chatbot-message m-1 p-1">
            <div className="flex flex-col items-center my-4">
              <h1 className="font-extrabold text-3xl text-blue-900">
                Welcome to the{" "}
              </h1>
              <h1 className="font-extrabold text-3xl text-blue-900 mb-3">
                Propit AI
              </h1>
              <p className="w-[98%] text-center text-sm text-blue-900 mx-auto">
                I&apos;m your <b>ultimate Real Estate expert</b>, specializing
                in market analysis, property pricing, community comparisons, and
                more. Whether you&apos;re an investor, a family, or a student,
                consult me for insights on any street, in any city worldwide.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row justify-start items-center">
                <div className="flex flex-row justify-between items-center my-1">
                  <img
                    src={Copilot1}
                    loading="lazy"
                    alt="Chatbot Profile"
                    className="mr-1 py-1 w-6"
                  />
                </div>
                <p className="">
                  <div className="w-full flex flex-col justify-start items-center p-1 bg-[#E2E0EF] rounded-md">
                    {defaultChatbotMessage.text}
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="messages-container">
            {messages.map((msg, index) => (
              <Message
                key={index}
                msg={msg}
                scrollIntoView={index === messages.length - 1}
              />
            ))}
          </div>
        </div>
        {/* </ScrollContainer> */}
      </div>
      {showChatbot && (
        <div className="absolute bottom-0 w-full z-50">
          <form
            onSubmit={handleSubmit}
            style={showChatbot ? {} : shadowStyle}
            className={
              showChatbot
                ? "sticky  bottom-0 flex flex-row sm:justify-between justify-center sm:items-start px-1 rounded-lg items-center py-2 sm:flex-nowrap flex-wrap  bg-white"
                : "flex  flex-row sticky bottom-0 sm:justify-between justify-center sm:items-start  rounded-full items-center py-2 sm:flex-nowrap flex-wrap sm:w-[98%]  mx-auto w-[80%]   bg-white"
            }
          >
            <div
              className={
                showChatbot
                  ? "flex flex-row justify-between items-center bg-white rounded-xl w-full"
                  : "flex flex-row justify-between items-center  w-full"
              }
            >
              {showChatbot && (
                <div className="border border-gray-400 p-2 m-2 rounded-full text-gray-400">
                  <GrCopy className="text-3xl" />
                </div>
              )}
              {showChatbot && (
                <div className="border border-gray-400 p-2 m-2 rounded-full text-gray-400">
                  <TiMicrophone className="text-3xl" />
                </div>
              )}

              <div className="flex flex-row justify-between items-center sm:w-[98%]  mx-auto w-[95%]  bg-white rounded-full p-1  border-gray-300 border-2">
                <input
                  type="text"
                  value={inputText}
                  placeholder={
                    showplaceholder ? placeholder : "ask me anything..."
                  }
                  className="focus:outline-none w-full rounded-full text-md sm:px-3 p-[0.35rem]"
                  onChange={handleInputChange}
                  onClick={handleshow}
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex justify-center items-center gradient  text-black text-md px-1 rounded-full  relative h-10 sm:text-[10.5px]"
                >
                  {isLoading ? (
                    <div className="loader"></div>
                  ) : (
                    <BsFillSendFill className="text-4xl p-2 text-white" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {!showChatbot && (
        <form
          onSubmit={handleSubmit}
          style={showChatbot ? {} : shadowStyle}
          className={
            showChatbot
              ? "sticky bottom-0 flex flex-row sm:justify-between justify-center sm:items-start px-1 rounded-lg items-center py-2 sm:flex-nowrap flex-wrap  "
              : "flex flex-row sm:justify-between justify-center sm:items-start  rounded-full items-center py-2 sm:flex-nowrap flex-wrap sm:w-[98%]  mx-auto w-[70%]   "
          }
        >
          <div
            className={
              showChatbot
                ? "flex flex-row justify-between items-center bg-white rounded-xl w-full"
                : "flex flex-row justify-between items-center  w-full"
            }
          >
            <div className="flex flex-row justify-between items-center sm:w-[98%]  mx-auto w-[95%]  bg-white rounded-full p-1  border-gray-300 border-2">
              <input
                type="text"
                value={inputText}
                placeholder={
                  showplaceholder ? placeholder : "ask me anything..."
                }
                className="focus:outline-none w-full rounded-full text-md sm:px-3 p-[0.35rem]"
                onChange={handleInputChange}
                onClick={handleshow}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="flex justify-center items-center  text-black text-md px-2 rounded-full py-2 relative h-10 sm:text-[10.5px]"
              >
                <img src={search} alt="" className="sm:w-10 w-12" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Chatbot;
