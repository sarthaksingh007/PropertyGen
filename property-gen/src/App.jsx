import { useContext, useEffect, useState } from "react";
import "./App.css";
import Center from "./component/Center";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Last from "./component/Last";
import Chatbot from "./component/chatbot/Chatbot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Depending on the value of showChatbot, render either Chatbot or LandingPage */}
          <Route
            path="/"
            element={
              <>
                {<Header />}
                <Hero />
                <Center />
                {<Last />}
              </>
            }
          />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
