import React, { useState } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData.js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Slider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <ArrowBackIosIcon onClick={prevSlide} className="backArrow" />
      <ArrowBackIosIcon onClick={prevSlide} className="backArrow1" />
      <ArrowForwardIosIcon onClick={nextSlide} className="forwardArrow" />
      <ArrowForwardIosIcon onClick={nextSlide} className="forwardArrow1" />
      {SliderData.map((slide, index) => {
        return (
          <a
            href="#"
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="" className="image" />
            )}
          </a>
        );
      })}
    </div>
  );
};

export default Slider;
