import { useContext, useEffect, useMemo, useState } from "react";
import Gott from "./../assets/got.png";
import search from "./../assets/search.png";
import Chatbot from "./../component/chatbot/Chatbot";
import { ChatbotContext } from "../chatContext";
import { animate } from "framer-motion";
const Hero1 = () => {
  const { setShowChatbot } = useContext(ChatbotContext);
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };
  const [inputText, setInputText] = useState("");
  const [showplaceholder, setShowplaceholder] = useState(true);
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

  const handleClick = () => {
    
    setShowChatbot(true);
  };

  return (
    <div className="herrr">
      <img src={Gott} alt="" className="sm:p-4  sm:w-2/6 w-3/5 p-5  mx-auto" />
      <p className="text-white sm:w-2/5 w-10/12 sm:text-lg text-sm sm:p-2 p-1 my-3 sm:mb-3 mb-10 text-center mx-auto">
        That’s all it takes to find your perfect property with{" "}
        <span className="gotpara ">
          <b>Propit Ai</b> - World’s first personalized virtual property
          consultant!
        </span>
      </p>

      <div className="my-16">
        <form
          // onSubmit={handleSubmit}
          style={shadowStyle}
          className={
            "flex flex-row sm:justify-between justify-center sm:items-start  rounded-full items-center py-2 sm:flex-nowrap flex-wrap sm:w-[98%]  mx-auto w-[70%]   "
          }
        >
          <div className={"flex flex-row justify-between items-center  w-full"}>
            <div className="flex flex-row justify-between items-center sm:w-[98%]  mx-auto w-[95%]  bg-white rounded-full p-1  border-gray-300 border-2">
              <input
                type="text"
                value={inputText}
                placeholder={
                  showplaceholder ? placeholder : "ask me anything..."
                }
                className="focus:outline-none w-full rounded-full text-md sm:px-3 p-[0.35rem]"
                onClick={handleClick}
                required
              />
              <button
                type="submit"
                // disabled={isLoading}
                className="flex justify-center items-center  text-black text-md px-2 rounded-full py-2 relative h-10 sm:text-[10.5px]"
              >
                <img src={search} alt="" className="sm:w-10 w-12" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero1;
