/* eslint-disable react/prop-types */
import React from "react";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RetweetIcon from "@mui/icons-material/LoopOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";

export default function Posts(props) {
  return (
    <div className="post-container">
      <img src={props.avatar} alt="Avatar" className="post-avatar" />
      <div className="post">
        <div className="post-header">
          <div className="post-displayName">{props.displayName}</div>
          <div className="post-username">@{props.username}</div>
        </div>
        <div className="post-body">
          <div className="post-text">{props.text}</div>
        </div>
        <div className="post-footer">
          <CommentIcon />
          <RetweetIcon />
          <FavoriteIcon />
          <MoreIcon />
        </div>
      </div>
    </div>
  );
}
