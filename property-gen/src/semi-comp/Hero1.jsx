import Gott from "./../assets/got.png";
import { useAuth0 } from "@auth0/auth0-react";

const Hero1 = () => {
  const { loginWithRedirect, user, logout, isAuthenticated, error } =
    useAuth0();
    const shadowStyle = {
      WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,15,1)",
      MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
      boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    };
  if (error) {
    console.error("Auth0 Error:", error);
  }
  console.log(loginWithRedirect, user, logout, isAuthenticated, error, "login");

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
      {isAuthenticated ? (
        <button
        className=" sm:text-2xl text-xl block mx-auto text-white  mt-5 rounded-full px-6 py-2 "
          style={shadowStyle}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          You want to go?
        </button>
      ) : (
        <button
          className=" sm:text-2xl text-xl block mx-auto text-white  mt-5 rounded-full px-6 py-2 "
          style={shadowStyle}
          onClick={() => loginWithRedirect()}
        >
          Play with Bot, Click here
        </button>
      )}
    </div>
  );
};

export default Hero1;
