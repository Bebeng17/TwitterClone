import React from "react";
import "./widgets.css";
import SearchBox from "./SearchBox";
import Premium from "./Premium";
import Live from "./Live"; 
import WhoToFollow from "./WhoToFollow";
import Trends from "./Trends";
import Footer from "./Footer"


const Widgets = () => {
  return(
    <div className="widgets">
      <SearchBox />
      <Premium />
      <Live />
      <WhoToFollow />
      <Trends />
      <Footer />
    </div>

  );
};

export default Widgets;