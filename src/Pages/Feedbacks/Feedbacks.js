import React, { useState } from "react";
import button from "../../images/button.png";
import useFeedback from "../../hooks/useFeedback";
import Feedback from "../../Pages/Feedback/Feedback";
import "./Feedbacks.css";
const FeedBacks = () => {
  const [feedbacks, setFeedbacks] = useFeedback();
  const [button1, setButton1] = useState(false);

  return (
    <div className="maz-w-7xl px-12 py-5 feedbacks mx-auto">
      <h2 className="text-center text-3xl mb-5 section-header relative pb-2">
        WHAT MY PATIENTS SAY
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 ">
        {button1
          ? feedbacks
              .slice(2, 5)
              .map((feedback) => (
                <Feedback feedback={feedback} key={feedback.id} />
              ))
          : feedbacks
              .slice(0, 3)
              .map((feedback) => (
                <Feedback feedback={feedback} key={feedback.id} />
              ))}
      </div>
      <div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="button" onClick={() => setButton1(!button1)}></div>
          <div className="button" onClick={() => setButton1(!button1)}></div>
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
