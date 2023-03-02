import React, { useState } from "react";
import P from "prop-types";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import avatar from "../assets/Russell.webp";

export default function NewTweet({ onNewTweet }) {
  const [message, setMessage] = useState("");

  const submitTweet = async (e) => {
    e.preventDefault();

    const payload = {
      avatar,
      username: "BK",
      displayName: "Bryan",
      text: message,
    };

    const docRef = await addDoc(collection(db, "posts"), payload);

    setMessage("");
    onNewTweet({
      ...payload,
      id: docRef.id,
    });
  };

  return (
    <div className="tweet-container">
      <h3 className="home-title">Home</h3>
      <form onChange={submitTweet}>
        <img src={avatar} alt="Avatar" className="avatar" />
        <input
          type="text"
          className="newTweet-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit" className="submitButton" onClick={submitTweet}>
          Tweet
        </button>
      </form>
    </div>
  );
}

NewTweet.propTypes = {
  onNewTweet: P.func,
};
