import React, {useContext} from "react";
import "./TweetFeed.css"
import Tweet from "./Tweet.jsx"
import { AppContext } from "./App";


const TweetFeed = () => {
  const {tweets} = useContext(AppContext);


  return(
    <ul className="tweetFeed">
      {tweets.map((tweet,index) => (
        <Tweet 
        key={index}
        tweet={tweet} 
        />
      ) ) }
      
    </ul>
  )
};

export default TweetFeed;