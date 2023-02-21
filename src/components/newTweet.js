import React, { useState } from "react";
import db from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function NewTweet() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const submitTweet = (e) => {
    e.preventDefault();

    setDoc(doc(db, "posts"), {
      username: "bk",
      displayName: "Bryan",
      text: message,
      image: image,
    });

    // db.collection("posts").add({
    //   username: "bk",
    //   displayName: "Bryan",
    //   text: message,
    //   image: image,
    // });
    setMessage("");
    setImage("");
  };
  return (
    <div className="tweet-container">
      <form>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's happening?"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter an image URL"
          className="imageInput"
        />
        <button type="submit" onChange={submitTweet} className="submitButton">
          Tweet
        </button>
      </form>
    </div>
  );
}
