import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pic1 from "./../assets/pic1.jpg";
import Pic2 from "./../assets/pic2.jpg";
import Pic3 from "./../assets/pic3.jpg";
import Pic4 from "./../assets/pic4.jpg";
import Pic5 from "./../assets/pic5.jpg";
import Pic6 from "./../assets/pic6.jpg";

const properties = [
  {
    id: 1,
    imgSrc: Pic1,
    name: "Property1",
    yearlyInvestment: "9.78%",
    fundedDate: "May 21, 2024",
    currentValuation: "₹ 2,400,00",
  },
  {
    id: 2,
    imgSrc: Pic2,
    name: "Property2",
    yearlyInvestment: "10.50%",
    fundedDate: "June 15, 2024",
    currentValuation: "₹ 3,000,00",
  },
  {
    id: 3,
    imgSrc: Pic3,
    name: "Property3",
    yearlyInvestment: "8.25%",
    fundedDate: "April 10, 2024",
    currentValuation: "₹ 1,800,00",
  },
  {
    id: 4,
    imgSrc: Pic4,
    name: "Property4",
    yearlyInvestment: "11.00%",
    fundedDate: "March 22, 2024",
    currentValuation: "₹ 2,900,00",
  },
  {
    id: 5,
    imgSrc: Pic5,
    name: "Property5",
    yearlyInvestment: "7.50%",
    fundedDate: "July 30, 2024",
    currentValuation: "₹ 2,200,00",
  },
  {
    id: 6,
    imgSrc: Pic6,
    name: "Property6",
    yearlyInvestment: "9.00%",
    fundedDate: "February 18, 2024",
    currentValuation: "₹ 2,500,00",
  },
];
const ProCard = () => {
  const shadowStyle = {
    WebkitBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    MozBoxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
    boxShadow: "0px 0px 27px 4px rgba(0,9,31,1)",
  };
  return (
    <div>
      <h1 className="text-center text-white mt-16 text-3xl font-bold my-4">Property Card</h1>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        className="mx-auto my-10"
      >
        {properties.map((property, index) => (
          <div
            key={index}
            style={shadowStyle}
            className="p-2 rounded-xl w-3/4 m-auto flex flex-col items-center justify-start my-10"
          >
            <img
              src={property.imgSrc}
              className="rounded-xl w-11/12 h-52"
              alt={property.name}
            />
            <div className="w-full">
              <h1 className="text-white sm:text-xl text-lg font-bold my-4 sm:ml-5 mx-auto">
                {property.name}
              </h1>
              <div className="w-full flex flex-col justify-start items-center my-2">
                <div className="flex flex-row justify-between items-center my-1 w-11/12">
                  <p className="text-white font-semibold sm:text-lg text-md">
                    Yearly investment
                  </p>
                  <b className="text-white font-semibold sm:text-lg text-md">
                    {property.yearlyInvestment}
                  </b>
                </div>
                <div className="flex flex-row justify-between items-center my-1 w-11/12">
                  <p className="text-white font-semibold sm:text-lg text-md">
                    Funded Date
                  </p>
                  <b className="text-white font-semibold sm:text-lg text-md">
                    {property.fundedDate}
                  </b>
                </div>
                <div className="flex flex-row justify-between items-center my-1 w-11/12">
                  <p className="text-white font-semibold sm:text-lg text-md">
                    Current Valuation
                  </p>
                  <b className="text-white font-semibold sm:text-lg text-md">
                    {property.currentValuation}
                  </b>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProCard;
