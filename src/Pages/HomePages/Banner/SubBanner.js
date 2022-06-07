import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";

import { BiLike } from "react-icons/bi";
const SubBanner = () => {
  return (
    <div className="px-4 lg:px-24 max-w-7xl mx-auto my-10 z-50 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <div className="bg-sky-400  rounded p-5 text-center text-white border-l-2 flex justify-center items-center flex-col">
          <AiFillSafetyCertificate className="text-7xl text-white mb-3" />
          <h3 className="text-2xl font-semibold">Certification</h3>
          <p>
            Corned beef pancetta ut, aliquip tri-tip turducken pork chop. Cow
            beef eu bacon jowl pastrami.
          </p>
        </div>
        <div className="bg-sky-400 p-[15px]  rounded text-center text-white border-l-2 flex justify-center items-center flex-col">
          <GiAlarmClock className="text-7xl text-white mb-3" />
          <h3 className="text-2xl font-semibold">24/7 Opened</h3>
          <p>
            Dolor corned beef ipsum, nulla filet mignon flank in ut minim.
            Boudin landjaeger pork belly.
          </p>
        </div>
        <div className="bg-sky-400 p-[15px]  rounded text-center text-white border-l-2 flex justify-center items-center flex-col">
          <BiLike className="text-7xl text-white mb-3" />
          <h3 className="text-2xl font-semibold">Fair Prices</h3>
          <p>
            Lorem chicken culpa, sed filet mignon chuck shank ground und in id
            laboris laborum short.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
