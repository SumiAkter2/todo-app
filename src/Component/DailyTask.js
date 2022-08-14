import React from "react";
import logo from "../todo.png";
import "../App.css";
const DailyTask = () => {
  return (
    <div>
      <button
        className="btn"
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
      >
        Theme
      </button>
      <div className="flex">
        <img className="App" src={logo} alt="" />
        <h1 className="text-slate-600 text-6xl ">todo </h1>
      </div>
    </div>
  );
};

export default DailyTask;
