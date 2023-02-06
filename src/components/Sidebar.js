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
      <TwitterIcon/>
      <SidebarOptions
        Icon={HomeIcon}
        text="Home"
      />
      <SidebarOptions
        Icon={ExploreIcon}
        text="Explore"
      />
      <SidebarOptions
        Icon={NotificationIcon}
        text="Notifications"
      />
      <SidebarOptions
        Icon={MessageIcon}
        text="Messages"
      />
      <SidebarOptions
        Icon={BookmarkIcon}
        text="Bookmarks"
      />
      <SidebarOptions
        Icon={ListIcon}
        text="Lists"
      />
      <SidebarOptions
        Icon={ProfileIcon}
        text="Profile"
      />
      <SidebarOptions
        Icon={MoreIcon}
        text="More"
      />
    </div>
  )
};

export default Sidebar;