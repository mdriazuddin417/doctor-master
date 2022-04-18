import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className=" px-12 py-4 mx-auto max-w-7xl" id="contact">
      <h4 className="text-yellow-400 text-sm text-center">Have Question ?</h4>
      <h3 className="section-header relative pb-2 mb-3 text-center">
        Contact Me Now
      </h3>
      <div>
        <div className="grid lg:grid-cols-2 lg:gap-10 px-5">
          <div className="contact ">
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder="Your Email" />
            <br />
            <input type="password" placeholder="Your Phone" />
          </div>
          <div>
            <textarea placeholder="Your message" rows={5} cols={30}></textarea>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="pushable ">
            <span className="front">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
