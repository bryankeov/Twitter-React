import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/Tag";
import NotificationIcon from "@mui/icons-material/NotificationsOutlined";
import MessageIcon from "@mui/icons-material/MessageOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListIcon from "@mui/icons-material/List";
import ProfileIcon from "@mui/icons-material/Person2Outlined";
import MoreIcon from "@mui/icons-material/MoreOutlined";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <TwitterIcon className="twitter-icon" />
      <SidebarOptions icon={HomeIcon} text="Home" />
      <SidebarOptions icon={ExploreIcon} text="Explore" />
      <SidebarOptions icon={NotificationIcon} text="Notifications" />
      <SidebarOptions icon={MessageIcon} text="Messages" />
      <SidebarOptions icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOptions icon={ListIcon} text="Lists" />
      <SidebarOptions icon={ProfileIcon} text="Profile" />
      <SidebarOptions icon={MoreIcon} text="More" />
      <button type="button" className="tweet-btn">
        Tweet
      </button>
    </div>
  );
}
