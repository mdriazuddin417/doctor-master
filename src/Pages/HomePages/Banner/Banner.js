import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/Banner/banner.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
import banner3 from "../../../images/Banner/banner3.jpg";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";

import { BiLike } from "react-icons/bi";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=" ">
      <div className="">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100 " src={banner1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={banner2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={banner3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className=" px-24  ">
        <div className="grid lg:grid-cols-3   ">
          <div className="bg-sky-400  rounded p-8 text-white border-l-2">
            <AiFillSafetyCertificate className="text-7xl text-white mb-3" />
            <h3>Certification</h3>
            <p>
              Corned beef pancetta ut, aliquip tri-tip turducken pork chop. Cow
              beef eu bacon jowl pastrami.
            </p>
          </div>
          <div className="bg-sky-400  rounded p-8 text-white border-l-2">
            <GiAlarmClock className="text-7xl text-white mb-3" />
            <h3>24/7 Opened</h3>
            <p>
              Dolor corned beef ipsum, nulla filet mignon flank in ut minim.
              Boudin landjaeger pork belly.
            </p>
          </div>
          <div className="bg-sky-400  rounded p-8 text-white border-l-2">
            <BiLike className="text-7xl text-white mb-3" />
            <h3>Fair Prices</h3>
            <p>
              Lorem chicken culpa, sed filet mignon chuck shank ground und in id
              laboris laborum short.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
