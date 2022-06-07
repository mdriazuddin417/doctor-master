import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="">
      <footer class="footer p-10 bg-base-200 text-base-content mt-10">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div class="items-center grid-flow-col">
          <p> ©{year} Master Doctor. Created with by doctor template</p>
        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div className="flex justify-center items-center gap-4">
            <FaFacebookSquare className="text-blue-500 text-2xl hover:text-black " />
            <TiSocialTwitter className="text-blue-300 text-2xl hover:text-black" />
            <FaLinkedin className="text-blue-700 text-2xl hover:text-black" />
            <FaYoutube className="text-red-500 text-2xl hover:text-black" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
