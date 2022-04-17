import React from "react";
import { Card } from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
const Service = ({ service }) => {
  const { price, name, id, picture, text } = service;
  return (
    <div>
      <Card className="h-100 rounded-2xl border-0 shadow">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p className="text-2xl text-blue-600 font-bold">{price}</p>
          <Card.Text className="text-gray-400">{text}</Card.Text>
          <button className="bg-green-500 text-white  py-2 rounded-2xl w-100 flex justify-center items-center text-xl hover:bg-green-800 hover:text-black hover:transition ">
            Order Now <CgShoppingCart className="text-2xl ms-2 " />
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;