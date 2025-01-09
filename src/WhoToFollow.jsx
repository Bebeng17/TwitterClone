import React from "react";
import "./WhoToFollow.css";
import Avatar from '@mui/material/Avatar';

const WhoToFollow = () => {
  return (
    <div className="whoToFollow">
        <h2>Who to follow</h2>
        <ul className="whoToFollow__followSuggestions" >
            <li>
                <div className="whoToFollow__profile">
                    <Avatar 
                    alt="Diana Mason" 
                    src="https://a.storyblok.com/f/191576/2400x1260/fd054dca6a/round_profile_picture_og_image.webp"
                    className="whoToFollow__avatar"
                    sx={{ fontSize: 15 }}
                    />
                    <div className="whoToFollow__userName">
                      <h3>Diana Mason</h3>
                      <p>@dianamason</p>
                    </div>
                </div>
                <button className="whoToFollow__button">Follow</button>
            </li>
            <li>
                <div className="whoToFollow__profile">
                    <Avatar 
                    alt="Michael Amankwaah" 
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
                    className="whoToFollow__avatar"
                    sx={{ fontSize: 15 }}
                    />
                    <div className="whoToFollow__userName">
                      <h3>Michael Amankwaah</h3>
                      <p>@marcusgabby</p>
                    </div>
                </div>
                <button className="whoToFollow__button">Follow</button>
            </li>
            <li>
                <div className="whoToFollow__profile">
                    <Avatar 
                    alt="Beatrice Arthur" 
                    src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg"
                    className="whoToFollow__avatar"
                    sx={{ fontSize: 15 }}
                    />
                    <div className="whoToFollow__userName">
                      <h3>Beatrice Arthur</h3>
                      <p>@broni730</p>
                    </div>
                </div>
                <button className="whoToFollow__button">Follow</button>
            </li>
        </ul>
        <div className="whoToFollow__showMore">
            <p>Show more</p>
        </div>
    </div>    
  )
};

export default WhoToFollow;
