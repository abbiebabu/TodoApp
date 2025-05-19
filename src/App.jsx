import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
    <div>
      <h1 className="poiret-one text-center text-8xl pt-20">TO-DO</h1>
      <div className="flex mt-20 gap-3 justify-center-safe">
        <input className="bg-white w-129 h-15 rounded-2xl" type="text" />
        <button className="bg-black inter px-5 py-2 cursor-pointer rounded-xl">Add Task</button>
      </div>
    </div>
    </>
  );
}

export default App;
