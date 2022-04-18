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
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="lg:-z-10"
        >
          <Carousel.Item className="relative ">
            <img className="d-block w-100 " src={banner1} alt="First slide" />
            <Carousel.Caption className="absolute top-50 left-50">
              <h3 className="lg:text-6xl text-xl  text-blue-400 font-bold ">
                DENTAL CARE FOR LIFE
              </h3>
              <p className="lg:text-2xl  text-sm">
                If your smile is not becoming to you, then you should be coming
                to me! Family dentistry with a woman’s touch.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="relative">
            <img className="d-block w-100 " src={banner2} alt="Second slide" />
            <Carousel.Caption className="absolute top-50 left-50">
              <h3 className="lg:text-6xl text-xl text-blue-400 font-bold">
                DENTISTRY WITH HEART
              </h3>
              <p className="lg:text-2xl text-sm">
                Creating the healthy smile you want through science and
                artistry. Because everyone deserves to smile.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="relative">
            <img className="d-block w-100 " src={banner3} alt="Third slide" />
            <Carousel.Caption className="absolute top-50 left-50">
              <h3 className="lg:text-6xl text-xl text-blue-400 font-bold">
                CARE FOR YOUR SMILE
              </h3>
              <p className="lg:text-2xl  text-sm ">
                Relax, this is going to be so easy. The smart way to find a
                dentist. Get matched with a great dentist today. Seriously, it’s
                time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="px-4 lg:px-24 max-w-7xl mx-auto lg:mt-[-100px] lg:order-5">
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
