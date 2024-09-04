import Gott from "./../assets/got.png";
import { useAuth0 } from "@auth0/auth0-react";

const Hero1 = () => {
  const { loginWithRedirect, user, logout, isAuthenticated, error } =
    useAuth0();

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
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button
          className="text-white text-center"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Hero1;
