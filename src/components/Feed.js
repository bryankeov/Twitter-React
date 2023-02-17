import React, { useState, useEffect } from "react";
import NewTweet from "./NewTweet";
import Posts from "./Posts";
import "./Feed.css";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snap) => {
      setPosts(snap.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="feed-container">
      <NewTweet />
      <Posts />
    </div>
  );
}

export default Feed;
