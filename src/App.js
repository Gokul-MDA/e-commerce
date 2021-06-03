import Header from "./components/Header/Header";
import Slider from "./components/ImageSlider/Slider";
import { SliderData } from "./components/ImageSlider/SliderData";

function App() {
  return (
    <>
      <Header />
      <Slider slides={SliderData} />
    </>
  );
}

export default App;
