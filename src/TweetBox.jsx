import React from "react";
import "./TweetBox.css";
import Profile from "./Profile";
import TweetBoxInput from "./TweetBoxInput";


const TweetBox = () => {
  return (
    <div className="tweetBox">
      <Profile />
      <TweetBoxInput />
    </div>
  )
};

export default TweetBox;