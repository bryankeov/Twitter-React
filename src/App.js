import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
    </div>
  );
}
