import { useContext } from "react";
import "./App.css";
import Center from "./component/Center";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Last from "./component/Last";
import ProCard from "./component/ProCard";
import { ChatbotContext } from "./chatContext";
import Chatbot from "./component/chatbot/Chatbot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { showChatbot } = useContext(ChatbotContext);
  return (
    <>
      <BrowserRouter>
        {!showChatbot && <Header />}
        <Routes>
          {/* Depending on the value of showChatbot, render either Chatbot or LandingPage */}
          <Route
            path="/"
            element={
              showChatbot ? (
                <Chatbot />
              ) : (
                <>
                  <Hero />
                  <Center />
                </>
              )
            }
          />
        </Routes>
        {!showChatbot && <Last />}
      </BrowserRouter>

      {/* <ProCard /> */}
    </>
  );
}

export default App;
