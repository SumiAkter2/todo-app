import React from "react";
import logo from "../todo.png";
import "../App.css";
const DailyTask = () => {
  return (
    <div>
      <div className="flex p-4 bg-slate-200">
        <img className="App w-16 shrink-0" src={logo} alt="" />
        <h1 className="text-slate-600 text-6xl pl-2">todo </h1>
      </div>
      <div className="flex justify-center items-center my-32">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-info w-full max-w-xs "
        />
        <button class="btn  btn-outline btn-info p-4 ml-4">Add</button>
      </div>
    </div>
  );
};

export default DailyTask;
