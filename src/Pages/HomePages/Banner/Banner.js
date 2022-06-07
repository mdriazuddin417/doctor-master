import React, { useState } from "react";

import banner1 from "../../../images/Banner/banner.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
import banner3 from "../../../images/Banner/banner3.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ clickable: true }}
      className="h-[600px] lg:order-1 z-0"
    >
      <SwiperSlide>
        <div
          class="hero h-[600px] "
          style={{
            backgroundImage: `url(${banner1})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold text-blue-500">
                DENTAL CARE FOR LIFE
              </h1>
              <p class="mb-5">
                If your smile is not becoming to you, then you should be coming
                to me! Family dentistry with a woman’s touch.
              </p>
              <button class="btn btn-primary ">Book Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="hero h-[600px]"
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold text-blue-500">
                DENTISTRY WITH HEART
              </h1>
              <p class="mb-5">
                Creating the healthy smile you want through science and
                artistry. Because everyone deserves to smile.
              </p>
              <button class="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="hero  h-[600px]"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold text-blue-500">
                CARE FOR YOUR SMILE
              </h1>
              <p class="mb-5">
                Relax, this is going to be so easy. The smart way to find a
                dentist. Get matched with a great dentist today. Seriously, it’s
                time.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
