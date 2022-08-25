import React from "react";
import logo from "../todo.png";
import "../App.css";
const DailyTask = () => {
  return (
    <div>
      <div className="flex">
        <img className="App" src={logo} alt="" />
        <h1 className="text-slate-600 text-6xl ">todo </h1>
      </div>
    </div>
  );
};

export default DailyTask;
