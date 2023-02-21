import React, { useState, useEffect } from "react";
import NewTweet from "./NewTweet";
import Posts from "./Posts";
import "./Feed.css";
import db from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const q = query(collection(db, "posts"));
  //   const snapshot = getDocs(q);
  //   setPosts(snapshot.docs.map((doc) => doc.data()));
  // }, []);

  console.log(posts);
  return (
    <div className="feed-container">
      <NewTweet />
      {posts.map((post, index) => (
        <Posts
          key={index}
          displayName={post.displayName}
          username={post.username}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  );
}
