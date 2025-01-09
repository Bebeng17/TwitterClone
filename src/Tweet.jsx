import React, {useContext} from 'react';
import "./Tweet.css";
import Avatar from '@mui/material/Avatar';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartSimple, faBookmark, faDownload } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "./App";



const Tweet = ({tweet}) => {
  const {user, setUser} = useContext(AppContext);

  return (
    <li className="tweet">
        <div className="tweet__container">
            <Avatar
            alt="Remy Sharp" 
            src="https://a.storyblok.com/f/191576/2400x1260/fd054dca6a/round_profile_picture_og_image.webp"
            className="tweet__avatar"
            sx={{ fontSize: 1 }} 
            />
            <div className="tweet__body">
                <div className="tweet__header">
                    <h3 className='tweet__displayname'>{user.displayName || "Anonymous"}</h3>
                    <VerifiedOutlinedIcon className='verifiedIcon' />
                    <p className='tweet__username'>@{user.userName || "Anonymous"} .</p>
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