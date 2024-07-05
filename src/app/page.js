"use client";

import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { IoTrashSharp } from "react-icons/io5";
import { v4 as uuid } from "uuid";
uuid();

export default function Home() {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState([
    { id: 1, task: "Do the dishes", completed: false },
  ]);

  function addToList(e) {
    e.preventDefault();
    setToDoList([...toDoList, { id: uuid(), task: value, completed: false }]);
    console.log(toDoList);
    setValue("");
  }

  function removeFromList(id) {
    setToDoList(toDoList.filter((task) => task.id !== id));
  }

  function completedTask(id) {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main className="flex justify-center h-screen">
      <div className="flex flex-col justify-center items-center rounded-lg shadow-lg p-8">
        <div className="flex text-center flex-col">
          <h1 className="font-sans text-4xl font-bold py-8">To Do List</h1>
          <div className="flex flex-row">
            <form className="flex items-center" onSubmit={addToList}>
              <input
                className="border-2 p-2"
                type="text"
                placeholder="Enter new task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="bg-blue-400 text-3xl p-1 text-white h-11 w-10 hover:bg-blue-600 transition-colors"
                onClick={addToList}
              >
                <IoAddSharp />
              </button>
            </form>
          </div>
        </div>
        <div className="w-full">
          <ul classname="w-full">
            {toDoList.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between text-xl p-2 font-sans bg-blue-400 text-white rounded mb-2 mt-2 ${
                  task.completed ? "bg-gray-600" : "bg-blue-400"
                } ${task.completed ? "line-through" : ""}`}
              >
                <span className="flex-grow">{task.task}</span>
                <input
                  type="checkbox"
                  className="p-2 w-14 h-4 cursor-pointer"
                  onChange={() => completedTask(task.id)}
                ></input>
                <button className="w-7" onClick={() => removeFromList(task.id)}>
                  <IoTrashSharp />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
