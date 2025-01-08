import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import './index.css';
import Sidebar from './Sidebar';
import Feed from './Feed';    
import Widgets from './Widgets';

export const AppContext = createContext();

function App() {
  const [tweets, setTweets]= useState([]);
    
    
    useEffect(() => {
      fetch("https://jsonplaceholder.org/posts")
        .then((response) => response.json())
        .then((data) => {
          setTweets(data.slice(0, 5));  // Directly slice and update the state
        });
    }, []);
    
  
    const addTweet = (tweet) => {
      setTweets([tweet, ...tweets]);
    };

  

  return (
    <AppContext.Provider value={{ tweets, addTweet }}>
      <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </AppContext.Provider>
  
  );
};

export default App
