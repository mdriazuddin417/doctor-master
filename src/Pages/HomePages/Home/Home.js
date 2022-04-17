import React from "react";
import Feedbacks from "../../../Pages/Feedbacks/Feedbacks";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default Home;
