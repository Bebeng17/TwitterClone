import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({active, Icon, text}) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon sx={{ fontSize: 30 }} className="sidebarOption__icon" />
      {/* <h2>{text}</h2> */}
    </div>
  );
};

export default SidebarOption;