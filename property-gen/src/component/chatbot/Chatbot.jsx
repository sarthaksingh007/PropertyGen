import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { animate } from "framer-motion";
import axios from "axios";
import "./chatbot.css";

import { RiGroupLine } from "react-icons/ri";

import { FaArrowRight } from "react-icons/fa6";
import { HiMiniArrowsPointingIn } from "react-icons/hi2";
import Copilot from "./../../assets/propit4.png";
import Copilot1 from "./../../assets/propit2.png";
import Profile from "./../../assets/profile.jpeg";
import AnimatedText from "./../chatbot/AnimatedText.jsx";
import { ChatbotContext } from "../../../src/chatContext.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import search from "./../../assets/search.png";
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
// import PropertyList from "../../../component/PropertyList.jsx";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [projectCard, setProjectCard] = useState();
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
  const api_url = "https://vercel-pexapi.vercel.app/";
  // const api_url = "http://localhost:5000/";

  useEffect(() => {
    // Function to fetch the leadId
    const fetchLeadId = () => {
      fetch(api_url + "fetchip")
        .then((response) => response.text())
        .then((ip) => {
          console.log("User IP: ", ip);
          const currDate = new Date();
          const date_time = currDate.toISOString();
          const newLeadId = date_time + ip;
          setLeadId(newLeadId);
          console.log(`The new lead is: ${newLeadId}`);
        })
        .catch((e) => {
          console.error("Error: ", e);
        });
    };

    // Call fetchLeadId function
    fetchLeadId();
  }, []); // Empty dependency array to run the effect only once on mount

  const saveHistory = async () => {
    const url = api_url + "save";

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
        api_url + "chat",
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
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   // Focus on the input field when the component mounts
  //   inputRef.current.focus();
  // }, []);

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
        delay: 0.5,
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
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    // Adjust height of messages container based on its content
    if (messagesContainerRef.current) {
      const containerHeight = messagesContainerRef.current.scrollHeight;
      messagesContainerRef.current.style.height = containerHeight + "px";
    }
  }, [messages, showChatbot]);

  return (
    <div
      className={
        showChatbot
          ? "dm mx-auto sm:w-full w-full bg-[#FFFFFF]  bg-opacity-100 rounded-lg border-1 border-[#D6D6E6] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          : "dm mx-auto sm:w-2/4     "
      }
    >
      <div
        className={
          showChatbot
            ? "bg-[#f0f6fb] rounded-lg sticky top-0 w-full  z-20"
            : "bg-[#f0f6fb] rounded-lg z-20 hidden"
        }
      >
        <div className="flex flex-row justify-between items-center">
          <img
            src={Copilot}
            loading="lazy"
            alt=""
            className="sm:w-[8%] w-[30%] mx-2 p-2"
            style={{ alignSelf: "flex-start" }}
          />

          {showChatbot && (
            <div
              className={
                showChatbot
                  ? "flex flex-row justify-end items-center w-2/4 "
                  : "flex flex-row justify-evenly items-center w-2/4 "
              }
            >
              <IoPersonCircleOutline className="mx-1 text-4xl text-[#121C4F] sm:text-2xl cursor-pointer" />
              {/* <TfiBrushAlt className="mx-1 text-2xl text-[#598bf8]" /> */}
              <TbMenu className="mx-1 text-4xl text-[#121C4F] sm:text-2xl" />
              {/* <MdOutlineMenu className="mx-1 text-2xl text-[#598bf8]" /> */}
            </div>
          )}
        </div>
      </div>

      <div
        className={
          showChatbot
            ? "messages-container sm:h-[70vh] h-[70vh] mx-auto sm:w-full w-full rounded-lg my-2 overflow-auto"
            : "messages-container sm:h-50 h-[30vh] mx-auto sm:w-full w-full rounded-lg my-2 overflow-auto hidden"
        }
      >
        <div className="chatbot-message m-1 p-1">
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row justify-between items-center my-1">
                <img
                  src={Copilot1}
                  loading="lazy"
                  alt="Chatbot Profile"
                  className="mr-1 py-1 w-6"
                />
                <p className="text-black font-bold text-lg">Propit-Ai</p>
              </div>
              <p className="">
                {/* <span className="flex flex-col justify-start items-start"> */}
                <div className="w-full flex flex-col justify-start items-center p-1 bg-[#efefef] rounded-md">
                  {defaultChatbotMessage.text}
                </div>
                {/* </span> */}
              </p>
            </div>
          </div>
        </div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.isUser
                ? "user-message m-1 p-1 text-right"
                : "chatbot-message m-1 p-1"
            }
          >
            {/* Render user message */}
            {msg.isUser ? (
              <div className="flex flex-col justify-start items-end">
                <div className="flex flex-col-reverse justify-end items-end sm:w-3/4">
                  <span className="flex flex-col justify-start items-center">
                    <div className="w-full mb-2 p-1 rounded-md bg-[#e1ecf4]">
                      {msg.text}
                    </div>
                  </span>
                  <div className="flex flex-row justify-between items-center my-1">
                    <p className="text-black font-bold text-lg">You:</p>
                    <img
                      src={Profile}
                      loading="lazy"
                      alt="Chatbot Profile"
                      className="mr-1 p-1 w-8"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Render chatbot message
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex flex-row justify-between items-center my-1">
                    <img
                      src={Copilot1}
                      loading="lazy"
                      alt="Chatbot Profile"
                      className="mr-1 py-1 w-6"
                    />
                    <p className="text-black font-bold text-lg">Propit-Ai</p>
                  </div>
                  <span className="flex flex-col justify-start items-start">
                    <div className="sm:w-[100%] w-full mb-2 flex flex-col justify-start items-start p-1 bg-[#efefef]  rounded-md">
                      <AnimatedText message={msg.text} />
                    </div>
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* </ScrollContainer> */}
      </div>

      <form
        onSubmit={handleSubmit}
        style={showChatbot ? {} : shadowStyle}
        className={
          showChatbot
            ? "sticky bottom-0 flex flex-row sm:justify-between justify-center sm:items-start px-1 rounded-lg items-center py-2 sm:flex-nowrap flex-wrap  "
            : "flex flex-row sm:justify-between justify-center sm:items-start  rounded-full items-center py-2 sm:flex-nowrap flex-wrap sm:w-[98%]  mx-auto w-[80%]   "
        }
      >
        <div className="flex flex-row justify-between items-center sm:w-[98%]  mx-auto w-[95%]  bg-white rounded-full p-1  border-gray-300 border-2">
          <input
            type="text"
            value={inputText}
            placeholder={showplaceholder ? placeholder : "ask me anything..."}
            className="focus:outline-none w-full rounded-full text-lg sm:px-3 p-2"
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
      </form>
      {showChatbot && (
        <div className="gradient1 flex flex-row justify-between px-4  mt-1">
          <div className="flex flex-col justify-center items-center text-white text-lg">
            <IoHome
              onClick={() => {
                setShowChatbot(false);
              }}
              className="p-1 pt-2 text-4xl"
            />
            <p>Home</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-lg border-t-white border-t-4">
            <IoSearch className="p-1 pt-2 text-4xl" />
            <p>Search</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white text-lg">
            <FaHistory className="p-1 pt-2 text-4xl" />
            <p>History</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
