import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();
  console.log(loginWithRedirect, user,useAuth0, "login");

  return (
    <button
      className="text-white text-center"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
