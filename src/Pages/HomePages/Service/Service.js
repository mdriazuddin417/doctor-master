import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { CgShoppingCart } from "react-icons/cg";
import { Navigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import ServiceModel from "./ServiceModel";

const Service = ({ service }) => {
  const [user] = useAuthState(auth);
  const { price, name, id, picture, text } = service;

  const handleBooking = () => {
    toast.success("thank you for the booking");
  };
  return (
    <div className="animate__animated animate__fadeInLeft relative ">
      <div class="card max-w-sm  bg-base-100 shadow-2xl h-full">
        <figure>
          <img src={picture} className=" h-[200px] w-full" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <h2 class="text-3xl text-red-900 font-bold">{price}</h2>
          <p className="text-gray-400">
            {text.slice(0, 90)}...
            <label class="btn btn-link">Read More</label>
          </p>

          <div class="card-actions justify-end">
            <button
              className=" absolute bottom-0 w-full left-0 py-2  hover:from-blue-800 hover:to-blue-400 duration-500 bg-gradient-to-t from-blue-400 to-blue-800  btn btn-primary flex  justify-center items-center"
              onClick={() => {
                handleBooking();
              }}
            >
              Booking Now{" "}
              <CgShoppingCart className="text-2xl ms-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
