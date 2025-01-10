import React from "react";
import "./Live.css";
import Avatar from '@mui/material/Avatar';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';


const Live = () => {
  return (
    <div className="live">
      <h3 className="live__OnX">Live on X</h3>
      <div className="live__account">
        <div className="liveAccount__header">
          <Avatar
          alt="Remy Sharp" 
          src="https://multitvworld.com/wp-content/uploads/2021/02/MULTI-TV-PROJECTJoy-News.png"
          className=""
          sx={{
            width: 14,
            height: 14,
          }}  
          />
          <h5>JoyNews</h5>
          <VerifiedOutlinedIcon
          sx={{ fontSize: 16 }} 
          className="live__verifiedIcon" 
          />
          <p>is hosting</p>
        </div>
        <div className="liveAccount__body">
          <h4>JoyNews Desk with Fostina sarfo | 2025</h4>
          <div className="live__viewers">
            <Avatar
            alt="Remy Sharp" 
            src="https://multitvworld.com/wp-content/uploads/2021/02/MULTI-TV-PROJECTJoy-News.png"
            className=""
            sx={{
              width: 24, // Adjust width
              height: 24, // Adjust height
            }}  
            />
            <p>+646</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Live;