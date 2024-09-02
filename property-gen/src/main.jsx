import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChatbotProvider } from "./chatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-oqeu2nb3dvlee8hw.us.auth0.com"
      clientId="zMvs6r0MKJ7TJuqSynISYuImYkMlxt1U"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ChatbotProvider>
        <App />
      </ChatbotProvider>
    </Auth0Provider>
  </React.StrictMode>
);
