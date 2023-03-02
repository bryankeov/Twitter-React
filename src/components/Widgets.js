import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

export default function Widgets() {
  return (
    <div className="widgets-container">
      <h3>Trends</h3>
      <TwitterTweetEmbed
        tweetId={"1519480761749016577"}
        className="twitter-embed"
      />
      <TwitterTimelineEmbed
        className="twitter-embed"
        sourceType="profile"
        screenName="twitter"
        options={{ height: 400 }}
      />
    </div>
  );
}
