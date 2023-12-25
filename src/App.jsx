import { shortList } from "./data";
import Carousel from "./Carousel";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const App = () => {
  const [dataShort, setDataShort] = useState(shortList);

  return (
    <div className="slider-container">
      {/* <IoIosArrowBack className="prev" /> */}
      {dataShort.map((a) => {
        const { id, title, name, image, quote } = a;
        return (
          <div key={id} className="slide">
            <Carousel title={title} image={image} name={name} quote={quote} />
          </div>
        );
      })}
      {/* <IoIosArrowForward className="next" /> */}
    </div>
  );
};
export default App;
