import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../images/notFound.jpg";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20 pb-40 px-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mb-5">
        <div>
          <img src={image} alt="" className="w-100" />
        </div>
        <div className="text-xl text-gray-800 flex justify-center items-center leading-10">
          Not everyone gets it right, and Awwward's 404 page uses all caps and
          stark imagery to communicate to the visitor that they haven't arrived
          where they were expecting to. The capitalised text in particular makes
          it harder to read, causing the user to tarry longer on their journey
          than they might otherwise prefer.
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 text-white hove:bg-blue-800 rounded-md px-5 py-3 text-xl"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
