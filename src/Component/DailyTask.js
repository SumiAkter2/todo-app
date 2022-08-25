import React from "react";
import logo from "../todo.png";
import "../App.css";
const DailyTask = () => {
  const inputValue = (e) => {
    console.log(e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    const add = e.target.name.value;
    console.log("add", add);
  };
  return (
    <div>
      <div className="flex p-4 bg-slate-200">
        <img className="App w-16 shrink-0" src={logo} alt="" />
        <h1 className="text-slate-600 text-6xl pl-2">todo </h1>
      </div>
      <div className="flex justify-center items-center my-32">
        <input
          onBlur={inputValue}
          name="text"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs "
        />
        <button
          onSubmit={handleAddTask}
          className="btn  btn-outline btn-info p-4 ml-4"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DailyTask;
