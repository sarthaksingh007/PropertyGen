import Gott from "./../assets/got.png";

import LoginButton from "./Login";
const Hero1 = () => {
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

      {/* <div className="my-16">
        <form
          // onSubmit={handleSubmit}
          style={shadowStyle}
          className={
            "flex flex-row sm:justify-between justify-center sm:items-start  rounded-full items-center py-2 sm:flex-nowrap flex-wrap sm:w-[98%]  mx-auto w-[70%]   "
          }
        >
          <div className={"flex flex-row justify-between items-center  w-full"}>
            <div className="flex flex-row justify-between items-center sm:w-[98%]  mx-auto w-[95%]  bg-white rounded-full p-1  border-gray-300 border-2">
              <input
                type="text"
                value={inputText}
                placeholder={
                  showplaceholder ? placeholder : "ask me anything..."
                }
                className="focus:outline-none w-full rounded-full text-md sm:px-3 p-[0.35rem]"
                onClick={handleClick}
                required
              />
              <button
                type="submit"
                // disabled={isLoading}
                className="flex justify-center items-center  text-black text-md px-2 rounded-full py-2 relative h-10 sm:text-[10.5px]"
              >
                <img src={search} alt="" className="sm:w-10 w-12" />
              </button>
            </div>
          </div>
        </form>
      </div> */}
      <LoginButton />
    </div>
  );
};

export default Hero1;
