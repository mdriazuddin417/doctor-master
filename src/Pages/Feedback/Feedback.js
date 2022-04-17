import React from "react";

const FeedBack = ({ feedback }) => {
  const { name, text, picture } = feedback;
  return (
    <div className="border rounded-lg p-3">
      <div className="text-center ">
        <div className="my-3 flex justify-center items-center feedback ">
          <img src={picture} width={100} alt="" className="" />
        </div>
        <p className="text-gray-300">{text}</p>
        <h3 className="text-xl mb-4">{name}</h3>

        <div className="my-1 flex justify-center items-center ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Alfonso_XII_of_Spain_signature.svg"
            alt=""
            width={100}
            className="text-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
