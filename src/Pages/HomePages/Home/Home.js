import React from "react";

import Feedbacks from "../../../Pages/Feedbacks/Feedbacks";
import Banner from "../Banner/Banner";
import ShortBanner from "../Banner/ShortBanner";
import SubBanner from "../Banner/SubBanner";
import Contact from "../Contact/Contact";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
      <ShortBanner />
      <Services />

      <Feedbacks />
      <Contact />
    </div>
  );
};

export default Home;
