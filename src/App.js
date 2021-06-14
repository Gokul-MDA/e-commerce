import React, { useState } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/ImageSlider/Slider";
import { SliderData } from "./components/ImageSlider/SliderData";
import SideMenu from "./components/Side Menu/SideMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggle={toggle} />
      <SideMenu isOpen={isOpen} toggle={toggle} />
      <Slider slides={SliderData} />
    </>
  );
}

export default App;
