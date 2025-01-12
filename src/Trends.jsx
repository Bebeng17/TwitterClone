import React from "react";
import "./Trends.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Trends = () => {
  return (
    <div className="trends">
        <h3>What's happening</h3>
        <div className="trends__khloe">
            <div className="trendKhloe__image">
                <img src="https://ic.pics.livejournal.com/chitatel_zhuzhu/62362584/11144893/11144893_original.jpg" alt="Chloe" />
            </div>
            <span className="trendKhloe__text">
                <h4>Khloe in Wonder Land</h4>
                <p>LIVE</p>
            </span>
        </div>
        <ul className="trends__lists" >
                <li className="trendsLists__topic" >
                  <div className="trendsListsTopic__header">
                    <p>Trending in Ghana</p>
                    <MoreHorizIcon 
                    sx={{ fontSize: 16 }} />
                  </div>
                  <h5>Kennedy Agyapong</h5>
                </li>
                <li className="trendsLists__topic" >
                  <div className="trendsListsTopic__header">
                  <p>Trending in Ghana</p>
                    <MoreHorizIcon 
                    sx={{ fontSize: 16 }} />
                  </div>
                  <h5>Overpriced</h5>
                </li>
                <li className="trendsLists__topic" >
                  <div className="trendsListsTopic__header">
                  <p>Trending in Ghana</p>
                    <MoreHorizIcon 
                    sx={{ fontSize: 16 }} />
                  </div>
                  <h5>Seth Terkper</h5>
                </li>
                <li className="trendsLists__topic" >
                  <div className="trendsListsTopic__header">
                    <p>Trending in Ghana</p>
                    <MoreHorizIcon 
                    sx={{ fontSize: 16 }} />
                  </div>
                  <h5>Dampare</h5>
                </li>
            </ul>
            <div className="trends__showMore">
              <p>Show more</p>
            </div>

    </div>
  )
};

export default Trends;