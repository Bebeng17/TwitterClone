import React from "react";
import "./TweetBoxIconsOption.css";

const TweetBoxIconsOption = ({ Icon }) => {
  return (
    <div className="tweet-box-icons-option">
      <Icon sx={{ fontSize: 15 }} />
    </div>
  );
};

export default TweetBoxIconsOption;