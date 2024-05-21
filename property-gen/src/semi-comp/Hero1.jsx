import Gott from "./../assets/got.png";
import search from "./../assets/search.png";
const Hero1 = () => {
  return (
    <div>
      <img src={Gott} alt="" className="sm:p-4 p-7 sm:w-2/5  mx-auto" />
      <p className="text-white sm:w-2/5 sm:text-xl text-lg p-2 my-3 text-center mx-auto">
        That’s all it takes to find your perfect property with{" "}
        <span className="gotpara">
          Property Genius - World’s first personalized virtual property
          consultant!
        </span>
      </p>
      <div className="rounded-full p-2 bg-red-300 sm:w-7/12 w-11/12 mx-auto">
        <div className="flex flex-row justify-between items-center sm:w-full mx-auto bg-white rounded-3xl p-1 ">
          <input
            type="text"
            name=""
            id=""
            className="focus:outline-none w-full rounded-3xl text-lg sm:px-2 px-1"
          />{" "}
          <img src={search} alt="" className="sm:w-10 w-9" />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
