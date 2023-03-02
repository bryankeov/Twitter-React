import React, { useState } from "react";
import P from "prop-types";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import avatar from "../assets/Russell.webp";
import PhotoIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifIcon from "@mui/icons-material/GifBoxOutlined";
import PollIcon from "@mui/icons-material/PollOutlined";
import EmoteIcon from "@mui/icons-material/InsertEmoticon";
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
      <form onSubmit={submitTweet}>
        <img src={avatar} alt="Avatar" className="avatar" />
        <input
          type="text"
          className="newTweet-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's happening?"
          maxLength="280"
        />
        <PhotoIcon className="newTweet-icons" />
        <GifIcon className="newTweet-icons" />
        <PollIcon className="newTweet-icons" />
        <EmoteIcon className="newTweet-icons" />
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
