import React, { useState, useEffect } from "react";
import NewTweet from "./NewTweet";
import Posts from "./Posts";
import "./Feed.css";
import db from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"));
      const snapshot =  await getDocs(q);
      setPosts(snapshot.docs.map((doc) => doc.data()));
    };

    fetchData();
  }

  const handleNewTweet = (newPost) => {
    // fetchPosts();
    setPosts([
      newPost,
      ...posts,
    ]);
  }

  console.log(posts);
  return (
    <div className="feed-container">
      <NewTweet onNewTweet={handleNewTweet} />
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
