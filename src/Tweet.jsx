import React from 'react';
import "./Tweet.css";
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartSimple, faBookmark, faDownload } from '@fortawesome/free-solid-svg-icons';



const Tweet = ({tweet}) => {

  return (
    <li className="tweet">
        <div className="tweet__container">
            <Avatar
            alt="Remy Sharp" 
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            className="tweet__avatar"
            sx={{ fontSize: 1 }} 
            />
            <div className="tweet__body">
                <div className="tweet__header">
                  
                </div>
                <div className="tweet__text">
                    <p>{tweet.content}</p>
                </div>
                <div className="tweet__image">
                    <img src={tweet.image} alt="Tweet Image" />
                </div>
                <div className="tweet__footer">
                    <div className="tweetIcons__excludeDownloadIcon">
                        <FontAwesomeIcon icon={faComment} className='commentIcon' />
                        <FontAwesomeIcon icon={faRetweet} className='retweetIcon' />
                        <FontAwesomeIcon icon={faHeart} className='likeIcon' />  
                        <FontAwesomeIcon icon={faChartSimple} className='viewIcon' />
                        <FontAwesomeIcon icon={faBookmark} className='bookmarkIcon' />
                    </div>
                    <FontAwesomeIcon icon={faDownload} className='downloadIcon' />
                </div>
            </div>
        </div>
    </li>
  )
};

export default Tweet;