import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChatbotProvider } from "./chatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </React.StrictMode>
);
