import React from "react";
import "./TweetBoxContentIconsOptions.css";
import TweetBoxIconsOption from "./TweetBoxIconsOption";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const TweetBoxContentIconsOptions = () => {
  return (
    <div className="tweetBoxContentIconsOptions">
      <TweetBoxIconsOption className="media" Icon={InsertPhotoOutlinedIcon}/>
      <TweetBoxIconsOption className="gif" Icon={GifBoxOutlinedIcon}/>
      <TweetBoxIconsOption className="grok" Icon={OpenInNewOutlinedIcon}/>
      <TweetBoxIconsOption className="poll" Icon={FormatListBulletedIcon}/>
      <TweetBoxIconsOption className="schedule" Icon={EventIcon}/>
      <TweetBoxIconsOption className="location" Icon={LocationOnOutlinedIcon}/>
    </div>
  )
};

export default TweetBoxContentIconsOptions;