import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidQuoteRight } from "react-icons/bi";

const Carousel = ({ image, name, quote, title }) => {
  // const [data, setData] = useState(shortList);
  return (
    <>
      <img className="person-img" src={image} alt={name} />
      <IoIosArrowBack className="prev" />
      <div>
        <h4 className="name">{name}</h4>
        <h5 className="title">{title}</h5>
      </div>
      <IoIosArrowForward className="next" />
      <p className="text">{quote}</p>
      <div className="icon">
        <BiSolidQuoteRight />
      </div>
    </>
  );
};

export default Carousel;
