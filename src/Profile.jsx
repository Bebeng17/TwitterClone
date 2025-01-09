import React from "react";
import "./Profile.css"
import Avatar from '@mui/material/Avatar';

const Profile = () => {
  return (
    <div className="profile">
      <Avatar 
        alt="Remy Sharp" 
        src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        className="profile__avatar"
        sx={{ fontSize: 15 }}
      />
    </div>
  )
};

export default Profile;