import React from "react";
import img1 from "./../assets/1-Emoji.png";
import img2 from "./../assets/2-Emoji.png";
import img3 from "./../assets/3-Emoji.png";
import img4 from "./../assets/4-Emoji.png";
import img5 from "./../assets/5-Emoji.png";
import img6 from "./../assets/6-Emoji.png";

const features = [
  {
    title: "Intelligent Matching",
    description:
      "Our AI algorithm analyzes your investment criteria and preferences to match you with pre-vetted, high-potential properties from trusted builders.",
    image: img1,
  },
  {
    title: "Unbiased Insights",
    description:
      "Gain access to data-driven market analysis and future predictions to make investment decisions you can be confident in.",
    image: img2,
  },
  {
    title: "Immersive Property Exploration",
    description:
      "Explore potential investments through high-quality photos, videos, and drone footage.",
    image: img3,
  },
  {
    title: "Direct Builder Connection",
    description:
      "Bypass the brokerage and connect directly with builders to save on fees and streamline your investment journey.",
    image: img4,
  },
  {
    title: "Side-by-Side Comparisons",
    description:
      "Compare projects, builders, and locations side-by-side to make informed and confident choices.",
    image: img5,
  },
  {
    title: "Multilingual Support",
    description:
      "Enjoy seamless communication with builders through our multi-language support with voice chat functionality.",
    image: img6,
  },
];

const Center = () => {
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };
  return (
    <div className="hero2">
      <div
        style={shadowStyle}
        className="p-2 rounded-3xl bg-[#2b292959] sm:w-4/5 w-11/12 mx-auto"
      >
        <h1 className="text-left sm:ml-1 ml-5 text-white sm:text-5xl text-2xl sm:w-2/4 w-11/12 font-extrabold my-2 mb-7">
          <span className="gotpara">Property Genius</span> takes the guesswork
          out of the equation.
        </h1>
        <div className="flex flex-wrap justify-evenly items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center sm:p-3 p-1 my-4 custom-gradient2 relative sm:m-4 m-2 rounded-2xl sm:w-1/4 w-2/5 gradient-border sm:h-84 h-[20rem]"
            >
              <img
                src={feature.image}
                alt=""
                className="absolute sm:top-[-40px] sm:left-4 top-[-20px] left-2 sm:w-auto w-10"
              />
              <h1 className="text-white text-left sm:text-2xl text-xl px-2 sm:px-4 font-bold sm:mt-10 mt-4 ">
                {feature.title}
              </h1>
              <p className="text-white text-left sm:text-lg text-sm p-2 sm:p-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Center;
