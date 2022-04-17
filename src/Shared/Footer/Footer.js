import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <FaFacebookSquare className="text-blue-500 text-4xl " />
        <TiSocialTwitter className="text-blue-300 text-4xl " />
        <FaLinkedin className="text-blue-700 text-4xl " />
        <FaYoutube className="text-red-500 text-4xl " />
      </div>
      <div className="text-center mt-2">
        <p>{year} Master Doctor. Created with by doctor template</p>
      </div>
    </div>
  );
};

export default Footer;
