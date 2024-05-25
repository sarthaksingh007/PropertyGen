import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProCard = () => {
  return (
    <div>
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
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
        <div className="bg-red-400 w-3/4 h-60 m-auto p-2"></div>
      </Carousel>
    </div>
  );
};

export default ProCard;
