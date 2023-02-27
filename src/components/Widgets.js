import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

export default function Widgets() {
  return (
    <div className="widgets-container">
      <h3>What is Happening?</h3>
      <TwitterTweetEmbed tweetId={"1235"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="bk"
        options={{ height: 400 }}
      />
    </div>
  );
}
