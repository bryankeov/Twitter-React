import React, { useState } from "react";
import P from 'prop-types';
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function NewTweet({ onNewTweet }) {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const submitTweet = async (e) => {
    e.preventDefault();

    const payload =   {
      username: "bk",
      displayName: "Bryan",
      text: message,
      image: image,
    }

    const docRef = await addDoc(collection(db, "posts"), payload);

    setMessage("");
    setImage("");
    onNewTweet({
      ...payload,
      id: docRef.id,
    });
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
        <button type="submit" onClick={submitTweet} className="submitButton">
          Tweet
        </button>
      </form>
    </div>
  );
}

NewTweet.propTypes = {
  onNewTweet: P.func,
}
