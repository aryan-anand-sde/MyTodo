import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Silk from "./components/Silk.jsx";

function App() {
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("todos", JSON.stringify(items));
  };

  React.useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    } else {
      setTodos([]);
    }
  }, []);

  const handleAdd = () => {
    setEditing(false);
    if (todo.length === 0) return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLocalStorage([
      ...todos,
      { id: uuidv4(), todo, isCompleted: todo.isCompleted || false },
    ]);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (id) => {
    setEditing(true);
    let current = todos.filter((item) => item.id === id);
    setTodo(current[0].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLocalStorage([...todos, { id: todo.id, todo, isCompleted: false }]);
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const handleToggle = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  return (
    <>
      <div className="background">
        <Silk
          speed={9}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <Navbar />
      <div className="min-h-screen">
        <div className="outer bg-slate-500 opacity-50 sm:w-xl md:w-3xl m-auto mb-5 min-h-96 mt-9 flex rounded-3xl border border-gray-200">
          <div className="inner opacity-100 bg-white w-[90%] sm:w-3/4 m-auto mb-3 min-h-80 mt-5 flex flex-col rounded-xl border border-gray-200 items-center">
            <h1 className="p-5 text-3xl sm:text-5xl font-extrabold text-zinc-950">
              Todo List
            </h1>
            <h2 className="sm:text-xl pb-3">Add a new todo</h2>
            <div className="add-todo pb-5 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                onChange={handleChange}
                value={todo}
                className="bg-slate-950 text-white rounded-lg w-50 sm:w-75 md:w-100 p-1"
              />
              <button
                onClick={handleAdd}
                className="bg-zinc-950 text-white rounded-lg p-1 sm:px-3"
              >
                {editing ? "Edit" : "Add"}
              </button>
            </div>

            <h2 className="sm:text-xl pb-3">
              {todos.length === 0 ? "Nothing Todo" : "Your Todos"}
            </h2>
            <div className="todos flex flex-col w-full items-start gap-3 pb-5">
              {todos.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="todo text-lg my-3 sm:m-0 px-3 flex flex-col sm:flex-row justify-between gap-1 sm:gap-3 sm:w-11/12"
                  >
                    <div className="flex gap-3 wrap-anywhere">
                      <input
                        type="checkbox"
                        name={item.id}
                        id=""
                        checked={item.isCompleted ? true : false}
                        onChange={handleToggle}
                        value={item.isCompleted}
                      />
                      <div className={item.isCompleted ? "line-through" : ""}>
                        {item.todo}
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-zinc-950 text-white rounded-lg px-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-zinc-950 text-white rounded-lg px-3"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
