import React, { useState } from "react";

function Slider() {
  const [SliderContent, setSliderContent] = useState([
    {
      id: 1,
      photoURL: "/imgs/man.png",
      active: false,
    },
    {
      id: 2,
      photoURL: "/imgs/beach.jpg",
      active: true,
    },
  ]);
  const changeSliderItem = (SliderID) => {
    const slides = SliderContent;
    slides.map((slide) => {
      if (slide.id === SliderID) {
        slide.active = true;
        setSliderContent([...slides]);
      } else {
        slide.active = false;
        setSliderContent([...slides]);
      }
      return false;
    });
  };
  return (
    <>
      <div className="slider-photos">
        {SliderContent.map((slide) => (
          <img
            key={slide.id}
            alt=""
            src={slide.photoURL}
            className={`max-w-[568px] w-full mx-auto ${
              slide.active ? "active" : "hidden"
            }`}
          />
        ))}
      </div>
      <div className="slider-dots flex items-center justify-center mt-8">
        {SliderContent.map((SliderDot) => (
          <span
            key={SliderDot.id}
            className={`w-4 h-4 rounded-full block mx-4 cursor-pointer ${
              SliderDot.active ? "active bg-gray-400" : " bg-gray-200"
            }`}
            data-id={SliderDot.id}
            onClick={() => changeSliderItem(SliderDot.id)}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Slider;
