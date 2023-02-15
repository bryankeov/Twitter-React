import React, { useState } from "react";
import db from "../firebase";

function Trending() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const submitTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "",
      displayName: "",
      text: message,
      image,
    });
    setMessage("");
    setImage("");
  };
  return (
    <div className="tweetContainer">
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
          className="imageInput"
        />
      </form>
    </div>
  );
}
export default Trending;
