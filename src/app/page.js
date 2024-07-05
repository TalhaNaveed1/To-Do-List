"use client";

import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
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

  return (
    <main className="flex justify-center h-screen">
      <div className="flex flex-col justify-center items-center rounded-lg shadow-lg h-1/2 p-8">
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
        <div>
          <ul>
            {toDoList.map((task) => (
              <li key={task.id} className="text-xl p-2 font-sans">
                {task.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
