/* eslint-disable react/prop-types */
import React from "react";

function SidebarOptions(props) {
  return (
    <div className="sidebarOptions">
      <props.icon />
      <h3>{props.text}</h3>
    </div>
  );
}

export default SidebarOptions;
