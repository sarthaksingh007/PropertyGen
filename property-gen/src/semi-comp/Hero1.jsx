import Gott from "./../assets/got.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
const Hero1 = () => {
  const { user,isAuthenticated } = useAuth0;
  console.log(user,isAuthenticated, "in the hero1");

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
      <LoginButton />
    </div>
  );
};

export default Hero1;
