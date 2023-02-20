import React, { useState, useEffect } from "react";
import NewTweet from "./NewTweet";
import Posts from "./Posts";
import "./Feed.css";
import db from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    const querySnapshot = getDocs(q);
    setPosts(querySnapshot.docs.map((doc) => doc.data()));
  }, []);
  return (
    <div className="feed-container">
      <NewTweet />
      {posts.map((post, index) => (
        <Posts
          key={index}
          displayName={posts.displayName}
          username={posts.username}
          text={posts.text}
          image={posts.image}
        />
      ))}
    </div>
  );
}
