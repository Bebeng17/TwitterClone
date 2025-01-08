import React from "react";
import "./Sidebar.css";
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Avatar from '@mui/material/Avatar';
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__xIconContainer" >
        <XIcon sx={{ fontSize: 30 }} className="sidebar__xIcon"/>
      </div>
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={OpenInNewOutlinedIcon} text="Grok" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <SidebarOption Icon={MapsUgcIcon} text="Post" />
      <div className="sidebar__avatarContainer">
        <Avatar 
        alt="Remy Sharp" 
        src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" 
        className="sidebar__avatar"
        sx={{ fontSize: 15 }}
        />
      </div>
    </div>
  );
};

export default Sidebar;