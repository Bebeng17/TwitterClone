import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import TweetFeed from "./TweetFeed";


const Feed = () => {
    return (
      <div className="feed">
        <div className="feed__header">
          <h2 className="feedHeader__forYou"><span>For you</span></h2>
          <h2 className="feedHeader__following"><span>Following</span></h2>
        </div>
        <TweetBox />
        <TweetFeed />
      </div>
    );
};

export default Feed;