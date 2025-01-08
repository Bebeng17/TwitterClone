import React from "react";
import "./TweetBoxButtons.css";
import PublicIcon from '@mui/icons-material/Public';
import TweetBoxContentIconsOptions from "./TweetBoxContentIconsOptions";

const TweetBoxButtons = () => {
  return (
    <div className="tweetBoxContent__buttons">
        <div className="tweetBoxContent__whoCanReply">
          <PublicIcon sx={{ fontSize: 13 }} />
          <p>Everyone can Reply</p>
        </div>
        <div className="tweetBoxContent__icons">
          <TweetBoxContentIconsOptions />
          <button type="submit" className="tweetBoxContent__postButton">Post</button>
        </div>
    </div>
  )
};

export default TweetBoxButtons;