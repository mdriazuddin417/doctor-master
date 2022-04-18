import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const Service = ({ service }) => {
  const [user] = useAuthState(auth);
  const { price, name, id, picture, text } = service;

  const handleBooking = () => {
    if (user) {
      toast.success("thank you for the booking");
    }
  };
  return (
    <div className="animate__animated animate__fadeInLeft ">
      <Card className="h-100 rounded-2xl border-0 shadow transition-all hover:scale-[1.1] hover:bg-gray-200">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p className="text-2xl text-blue-600 font-bold">{price}</p>
          <Card.Text className="text-gray-400">{text}</Card.Text>
          <Link to={"/checkout"} className="decoration-transparent">
            <button
              className="bg-green-500 text-white  py-2 rounded-2xl w-100 flex justify-center items-center text-xl hover:bg-green-800 hover:text-black hover:transition "
              onClick={() => {
                handleBooking();
              }}
            >
              Order Now <CgShoppingCart className="text-2xl ms-2 " />
            </button>
          </Link>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Service;
