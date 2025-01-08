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
      <TweetBoxIconsOption Icon={InsertPhotoOutlinedIcon} sx={{ fontSize: 15 }} />
      <TweetBoxIconsOption Icon={GifBoxOutlinedIcon}  />
      <TweetBoxIconsOption Icon={OpenInNewOutlinedIcon} />
      <TweetBoxIconsOption Icon={FormatListBulletedIcon}  />
      <TweetBoxIconsOption Icon={EventIcon} />
      <TweetBoxIconsOption Icon={LocationOnOutlinedIcon}  />
    </div>
  )
};

export default TweetBoxContentIconsOptions;