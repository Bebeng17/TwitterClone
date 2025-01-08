import React from "react";
import "./SearchBox.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <div className="searchBox">
      <form action="#" className="searchBox__Form">
        <SearchIcon className="searchBox__searchIcon" />
        <input type="text" placeholder="Search" id="" />
      </form>
    </div>
  );
};

export default SearchBox;