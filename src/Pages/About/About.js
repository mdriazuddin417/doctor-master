import React from "react";
import image from "../../images/image.png";
const About = () => {
  return (
    <div className="max-w-7xl pt-20 pb-30 px-12 mx-auto">
      <h2>
        <div className="text-5xl text-center relative section-header pb-3 uppercase">
          I have a <span className="text-blue-500">dream</span>
        </div>
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 animate__animated animate__fadeInDown">
        <img src={image} alt="" className="rounded w-100 lg:order-2 order-1" />
        <div className="flex justify-center items-center text-xl text-justify lg:order-1 order-2">
          <div>
            <h3 className="text-4xl text-blue-800 font-semibold">
              MD.RIAZ UDDIN
            </h3>
            <p>
              My childhood dream was to work with computer. But I did not get
              the guide line because I live in the village. I am reading about
              botany. But my choice is programming. I love doing this. I would
              have read CSE if someone had told me before. The goal is to start
              your own company with 5-6 years of working experience. Or get a
              good quality salary. I will do my best for him. No Compromise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
