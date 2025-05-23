import { useState, useRef } from "react";
import { TodoItems } from "./components/todoItems";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now,
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };

  return (
    <>
      <div>
        <h1 className="poiret-one text-center text-8xl pt-20">TO-DO</h1>
        <div className="flex mt-20 gap-3 justify-center-safe">
          <input
            className="bg-white w-200 h-15 rounded-2xl text-gray-950 px-5"
            type="text"
            ref={inputRef}
          />
          <button
            onClick={add}
            className="bg-black inter px-5 py-2 cursor-pointer rounded-xl"
          >
            Add Task
          </button>
        </div>
        {/* todo list */}
        <div className="my-16 mx-70 bg-[#4F4E4E] rounded-3xl py-6">
          <h1 className="text-4xl px-10 mt-1 poiret-one">Your List</h1>

          {todoList.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
