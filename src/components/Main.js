import React, { useState } from "react";
import ItemRender from "./ItemRender";
import "./Main.css";

function Main() {
  const [todoInput, setTodoInput] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function inputHandler(e) {
    setTodoInput(e.target.value);
  }

  function btnHandler(e) {
    e.preventDefault();
    if (todoInput === "") {
      alert("Please enter a todo!");
    } else {
      setItemArray((prev) => {
        return [...prev, todoInput];
      });
      setTodoInput("");
    }
  }

  function handleReset() {
    setItemArray([]);
  }

  function deleteItem(id) {
    setItemArray((prev) => {
      return prev.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  }

  return (
    <form onSubmit={btnHandler}>
      <div className="todo-body">
        <div className="formData">
          <input
            type="text"
            value={todoInput}
            id="todo-input"
            onChange={inputHandler}
            autoComplete="off"
            placeholder=" 👉 Enter Your Todo Here..."
          />
          <i onClick={btnHandler} id="addBtn" className="fa-solid fa-plus"></i>
        </div>

        <p>
          {itemArray.map((item, index) => {
            return (
              <ItemRender
                key={index}
                id={index}
                todoItem={item}
                deleteTodo={deleteItem}
              />
            );
          })}
        </p>

        <a href="#" onClick={handleReset} className="clear">
          Clear Your Todos
        </a>
      </div>
    </form>
  );
}

export default Main;
