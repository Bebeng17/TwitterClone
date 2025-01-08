import React, { useState, useContext } from 'react';
import "./TweetBoxInput.css";
import TweetBoxButtons from './TweetBoxButtons';
import { AppContext } from './App';

const TweetBoxInput = () => {
const [tweet, setTweet] = useState("");
const { addTweet} = useContext(AppContext);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(tweet);
    setTweet("");
  };




  return (
    <div className='tweetBoxInput'>
        <form onSubmit={handleSubmit} >
            <div className="tweetBoxInputTextarea__container">
                <textarea
                value={tweet}
                onChange={(e) => setTweet(e.target.value)} 
                placeholder="What's happening?!"></textarea>
            </div>
            <div className="tweetBoxInputButtons__container">
                <TweetBoxButtons />
            </div>
        </form>
    </div>
  );
};

export default TweetBoxInput;