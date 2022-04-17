import React from "react";

const CheckOut = () => {
  return (
    <div className="h-[80vh] grid lg:grid-cols-3 gap-4 px-12 mx-auto max-w-7xl bg-gray-300">
      <div className="lg:col-span-2 ...">
        <div className="w-100 bg-white rounded-lg py-3 px-4 mt-3">
          <h2 className="text-xl font-bold">Shipping Information</h2>
          <p className="text-blue-500">
            <select name="" id="">
              <option value="">Add new address</option>
              <option value="">Bangladesh</option>
              <option value="">America</option>
              <option value="">England</option>
            </select>
          </p>
        </div>
        <div className="w-100 bg-white rounded-lg py-3 px-4 mt-3">
          <h2 className="text-xl font-bold">Payment Method</h2>
          <p className="text-blue-500">
            <select name="" id="">
              <option value="">Select Payment Method</option>
              <option value="">Master Cart</option>
              <option value="">Visa Cart</option>
              <option value="">Paypal</option>
            </select>
          </p>
        </div>
        <div className="w-100 bg-white rounded-lg py-3 px-4 mt-3">
          <h2 className="text-xl font-bold">Order Overview</h2>
        </div>
      </div>
      <div className="..."></div>
    </div>
  );
};

export default CheckOut;
