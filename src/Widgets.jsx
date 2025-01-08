import React from "react";
import "./widgets.css";
import SearchBox from "./SearchBox";
import Premium from "./Premium";
import Live from "./Live"; 
import WhoToFollow from "./WhoToFollow";
import Trends from "./Trends";


const Widgets = () => {
  return(
    <div className="widgets">
      <SearchBox />
      <Premium />
      <Live />
      <WhoToFollow />
      <Trends />
    </div>

  );
};

export default Widgets;