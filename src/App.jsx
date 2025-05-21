import { useState } from "react";
import { TodoItems } from "./components/todoItems";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="poiret-one text-center text-8xl pt-20">TO-DO</h1>
        <div className="flex mt-20 gap-3 justify-center-safe">
          <input className="bg-white w-200 h-15 rounded-2xl text-gray-950 px-5" type="text" />
          <button className="bg-black inter px-5 py-2 cursor-pointer rounded-xl">
            Add Task
          </button>
        </div>
        {/* todo list */}
        <div className="my-16 mx-70 bg-[#4F4E4E] rounded-3xl py-6">
          <TodoItems />
          <TodoItems />
        </div>
      </div>
    </>
  );
}

export default App;
