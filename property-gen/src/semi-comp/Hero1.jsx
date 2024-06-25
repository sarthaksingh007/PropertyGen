import Gott from "./../assets/got.png";
import search from "./../assets/search.png";
import Chatbot from "./../component/chatbot/Chatbot";
const Hero1 = () => {
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };
  return (
    <div className="herrr">
      <img src={Gott} alt="" className="sm:p-4  sm:w-2/5 w-3/4 p-4  mx-auto" />
      <p className="text-white sm:w-2/5 w-10/12 sm:text-xl text-md sm:p-2 p-1 my-3 text-center mx-auto">
        That’s all it takes to find your perfect property with{" "}
        <span className="gotpara ">
          <b>Property Genius</b> - World’s first personalized virtual property
          consultant!
        </span>
      </p>
      {/* <div
        style={shadowStyle}
        className="rounded-full p-2  sm:w-7/12 w-11/12 mx-auto bg-[#2b292959]"
      > */}
        {/* <div
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 80,
            border: "1px white solid",
          }}
          className="flex flex-row justify-between items-center sm:w-full mx-auto bg-white rounded-full p-1"
        >
          <input
            type="text"
            placeholder="ask me anythink....."
            name=""
            id=""
            className="focus:outline-none w-full rounded-full text-lg sm:px-3 p-3 "
          />{" "}
          <img src={search} alt="" className="sm:w-10 w-12" />
        </div> */}
        <Chatbot />
      {/* </div> */}
    </div>
  );
};

export default Hero1;
