import React from "react";
import useServices from "../../hooks/useServices";

const CheckOut = (props) => {
  const [services, setServices] = useServices();
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
          {services.slice(0, 1).map((service) => (
            <div>
              <div className="flex gap-4">
                <img
                  src={service.picture}
                  alt=""
                  width={300}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-xl font-bold">{service.name}</p>
                  <p className="text-xl text-gray-700">{service.text}</p>
                  <p className="text-2xl font-bold ">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="... h-100">
        <div className="w-100 bg-white rounded-lg py-3 px-4 mt-3 ">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <p className="text-blue-500">
            <select name="" id="" className="mb-5">
              <option value="">Select Coupon</option>
              <option value="">021154</option>
              <option value="">3241645</option>
              <option value="">324124</option>
            </select>
            <br />
            <select name="" id="">
              <option value="">All Express Coupon</option>
              <option value="">021154</option>
              <option value="">3241645</option>
              <option value="">324124</option>
            </select>
          </p>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Promo code"
              className="bg-gray-200 p-2 rounded-md"
            />
            <button className="bg-red-400 text-black px-1 py-2 rounded-lg">
              Apply
            </button>
          </div>
          <p className="text-2xl font-bold mb-2">Total:$ 31</p>
          <button className="bg-orange-400 text-white rounded w-100 py-2">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
