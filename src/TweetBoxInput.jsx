import React, { useState, useContext } from 'react';
import "./TweetBoxInput.css";
import TweetBoxButtons from './TweetBoxButtons';
import { AppContext } from './App';

const TweetBoxInput = () => {
const [tweet, setTweet] = useState("");
const { addTweet} = useContext(AppContext);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet({content: tweet});
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


// import React, { useState, useContext, useRef } from 'react';
// import "./TweetBoxInput.css";
// import TweetBoxButtons from './TweetBoxButtons';
// import { AppContext } from './App';

// const TweetBoxInput = () => {
//   const [tweet, setTweet] = useState("");
//   const { addTweet } = useContext(AppContext);
//   const textareaRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTweet({ content: tweet });
//     setTweet("");
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"; // Reset height after submitting
//     }
//   };

//   const handleInput = (e) => {
//     const textarea = e.target;
//     textarea.style.height = "auto"; // Reset the height to auto
//     textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height based on content
//   };

//   return (
//     <div className='tweetBoxInput'>
//       <form onSubmit={handleSubmit}>
//         <div className="tweetBoxInputTextarea__container">
//           <textarea
//             ref={textareaRef}
//             value={tweet}
//             onChange={(e) => setTweet(e.target.value)}
//             onInput={handleInput}
//             placeholder="What's happening?!"
//             rows={1} // Start with one row
//           ></textarea>
//         </div>
//         <div className="tweetBoxInputButtons__container">
//           <TweetBoxButtons />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TweetBoxInput;
