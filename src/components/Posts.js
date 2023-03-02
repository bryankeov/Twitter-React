/* eslint-disable react/prop-types */
import React from "react";

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
      </div>
    </div>
  );
}
