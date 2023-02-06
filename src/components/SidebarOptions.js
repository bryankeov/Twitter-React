import React from "react";

function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOptions;
