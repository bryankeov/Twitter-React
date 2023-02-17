import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Tag";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/List";
import ProfileIcon from "@mui/icons-material/Person2";
import MoreIcon from "@mui/icons-material/More";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon" />
      <SidebarOptions icon={HomeIcon} text="Home" />
      <SidebarOptions icon={ExploreIcon} text="Explore" />
      <SidebarOptions icon={NotificationIcon} text="Notifications" />
      <SidebarOptions icon={MessageIcon} text="Messages" />
      <SidebarOptions icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOptions icon={ListIcon} text="Lists" />
      <SidebarOptions icon={ProfileIcon} text="Profile" />
      <SidebarOptions icon={MoreIcon} text="More" />
    </div>
  );
}

export default Sidebar;
