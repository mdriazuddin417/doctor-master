import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="pt-20 pb-40 px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl relative section-header text-center pb-2 mb-5">
        Question Mark
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 ">
        <div className="question animate__animated animate__bounceIn">
          <h3 className="font-semibold">
            Authentication and Authorization Deference ?
          </h3>
          <p className="text-gray-700 text-justify">
            Authentication is the act of verifying a user's website directly.
            Where there is no interference from any other resource. There is
            verification by email and password.Users can update everything they
            want. But the security is a little less.Authorization on the other
            hand is that the user himself will not give anything directly, will
            take the help of any other resource. And through the verification of
            the user another third party. It says a lot about the user and
            security.
          </p>
        </div>
        <div className="question animate__animated animate__bounceIn">
          <h3 className="font-semibold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p className="text-gray-700 text-justify">
            Firebase provides backend services, an easy-to-use SDK, and a
            built-in UI library for authenticating users in your app. It
            supports authentication using passwords, phone numbers, popular
            website identifiers like Google, Facebook and Twitter and much more.
            Which makes it a convenient way for a user to access the website. On
            the other hand, it makes the work of the developer much easier and
            more secure
          </p>
        </div>
        <div className="question animate__animated animate__bounceIn">
          <h3 className="font-semibold">
            What other services does firebase provide other than authentication?
          </h3>
          <p className="text-gray-700 text-justify">
            Firebase provides many types of services without authentication such
            as: Parse - Open Source Backend Platform; Back4app - Parse Hosting
            Platform; Kinvey - Mobile Backend as a Service (mBaaS) for the
            Enterprise; Backendless - Mobile Backend and API Services Platform;
            Pubnub - Real-time APIs and Global Messaging; First applications;
            Deployed - Simple core library, with a modular API for your
            application; NHost - Accelerates development and provides full
            control; Amplify JS - Open-source Javascript framework; Heroku -
            Platform as a service backed by Salesforce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
