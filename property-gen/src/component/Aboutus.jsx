import React from "react";
import Save1 from "./../assets/save2.png";
import D1 from "./../assets/d1.png";
import D2 from "./../assets/d2.png";
import D3 from "./../assets/d3.png";
import D4 from "./../assets/d4.png";
import D5 from "./../assets/d5.png";
import Save4 from "./../assets/save3.gif";
import Save5 from "./../assets/save4.gif";
const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };

const Aboutus = () => {
  return (
    <section className="sm:px-12 px-5 inter sm:mt-10 mt-4">
      <div>
        <h1 className="text-white  text-left sm:my-5 my-4 font-extrabold sm:text-[2.7rem] text-3xl">
          About Us
        </h1>
        <div className="sm:mb-5 mb-3">
          <p className="gotpara1 font-bold text-2xl">Our Story</p>
          <p className="text-white font-semibold sm:text-lg text-md">Your trusted partner in property search!</p>
        </div>
        <p className="text-gray-300 sm:text-lg text-md my-3">
          Founded in 2023, Propit is the ultimate AI-powered real estate
          partner, specializing in market analysis, property pricing, community
          comparisons, and more.
        </p>
        <p className="text-gray-300 sm:text-lg text-md my-3">
          After 13 years in the real estate industry, we pinpointed key
          challenges and developed proprietary AI systems to support users
          globally and connect them with builders, developers, and brokers.
        </p>
        <img src={Save1} className="rounded-3xl mt-5 sm:w-2/4 w-full" alt="" />
      </div>
      <div className="sm:my-10 my-4">
        <h2 className=" text-center sm:my-10 my-4 text-xl text-gray-300">As seen on</h2>
        <div className="flex justify-between items-center">
          <img src={D2} className="sm:w-48 w-[24%]" alt="" />
          <img src={D4} className="sm:w-48 w-[24%]" alt="" />
          <img src={D3} className="sm:w-48 w-[24%]" alt="" />
          <img src={D1} className="sm:w-48 w-[24%]" alt="" />
        </div>
      </div>
      <div style={shadowStyle} className="rounded-3xl sm:p-4 p-3 sm:my-10 my-8">
        <h1 className="sm:text-5xl text-3xl mt-4 mission font-semibold">Our Mission</h1>
        <p className="text-white font-semibold sm:text-lg text-sm">Transforming Property Searches with AI Innovation</p>
        <p className="text-gray-300 sm:text-lg text-md my-3">
          At Propit AI, our mission is to revolutionize the property search and
          consultation experience. We aim to bridge the gaps in traditional
          listings with the goal of becoming the go-to resource for property
          seekers worldwide, providing tools and features that go beyond
          standard listings.
        </p>
        <img src={Save4} className="sm:w-2/4 mx-auto" alt="" />
      </div>
      <div style={shadowStyle} className="rounded-3xl sm:p-4 p-3 sm:my-10 my-8">
        <h1 className="sm:text-5xl text-3xl mt-4 paran font-semibold">Our Promise</h1>
        <p className="text-white font-semibold sm:text-lg text-sm">Commitment to Excellence in Property Search</p>
        <p className="text-gray-300 sm:text-lg text-md my-3">
          At Propit, we are dedicated to delivering high-quality property
          recommendations, personalized consultations, and advanced tools for
          accurate fact-checking and comprehensive analysis. Our aim is to
          provide you with the confidence and clarity needed for every property
          decision, ensuring an exceptional real estate experience.
        </p>
        <img src={Save5} className="sm:w-2/4 mx-auto" alt="" />
      </div>
      <div className="my-4">
        <h1 className="sm:text-2xl text-xl font-bold text-white">Hear from <span className="paran">our customers!</span></h1>
        <div className="">
          <div className="flex  flex-row justify-evenly items-center overflow-x-auto  w-full">
            {[
              { imgs: D5 },
              { imgs: D5 },
              { imgs: D5 },
              { imgs: D5 },
              { imgs: D5 },
              { imgs: D5 },
            ].map((item, index) => (
              <img
                
                sizes="(max-width: 640px) 30vw, 200px"
                key={index}
                className="sm:w-[15%] w-[80%] sm:p-2 sm:m-2 p-1 m-1"
                src={item.imgs}
                alt=""
                style={{ objectFit: "cover" }} // Ensures images cover their container
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
