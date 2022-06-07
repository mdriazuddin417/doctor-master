import React from "react";

const ShortBanner = () => {
  return (
    <div class="hero h-[600px] bg-base-200 my-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/NFFNGgG/doctor.jpg"
          class=" rounded-lg shadow-2xl"
          alt="doctor"
        />
        <div className="max-w-4xl p-5">
          <h1 class="text-5xl font-bold uppercase text-blue-700">
            doctor of osteopathic medicine
          </h1>
          <p class="py-6 text-gray-500">
            While the term physician is a synonym for doctor, it's typically
            used to refer to those who practice general medicine rather than
            those who perform surgery, aka surgeons.
          </p>
          <button className="bg-gradient-to-tl from-yellow-500 to-red-500 btn btn-md ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortBanner;
