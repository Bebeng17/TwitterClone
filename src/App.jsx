import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import './index.css';
import Sidebar from './Sidebar';
import Feed from './Feed';    
import Widgets from './Widgets';

export const AppContext = createContext();

function App() {
  const [tweets, setTweets]= useState([]);
  const [user, setUser] = useState([]);
    
    
    useEffect(() => {
      fetch("https://jsonplaceholder.org/posts")
        .then((response) => response.json())
        .then((data) => {
          setTweets(data.slice(2, 5));
        });
    }, []);


    useEffect(() => {
      fetch("https://jsonplaceholder.org/users")
        .then((response) => response.json())
        .then((data) => {
          setUser({
            displayName: `${data[2].firstname} ${data[2].lastname}`, 
            userName: data[2].login.username
          });
          
        })
    }, []);
    
  
    const addTweet = (tweet) => {
      setTweets([tweet, ...tweets]);
    };

  

  return (
    <AppContext.Provider value={{ tweets, addTweet, user, setUser }}>
      <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </AppContext.Provider>
  
  );
};

export default App
