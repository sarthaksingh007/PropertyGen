// ChatbotContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <ChatbotContext.Provider value={{ showChatbot, setShowChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
};

ChatbotProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
