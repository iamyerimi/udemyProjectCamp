import React, { useState } from "react";

//할 일 목록 만들기
//map() 함수 사용
// 화살표 함수 사용

//   const todoList = document.getElementById("todoList");
// const test = [
//   { name: "yerim", age: 25, gender: "f" },
//   { name: "ah", age: 25, gender: "f" },
//   { name: "jw", age: 24, gender: "m" },
// ];
// const arrc = arr.map((item) => item.toUpperCase);

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo([...todo, newTodo]);
    setNewTodo("");
  };


  // const input = document.getElementById("todo");
  return (
    <>
      <div id="todoList">
        <form onSubmit={handleSubmit}>
          <input
            id="todo"
            type="text"
            onChange={handleInputChange}
            value={newTodo}
            placeholder="write down your to-do."
          />
          <button id="btn" onClick={handleSubmit}>
            add
          </button>
          <ul>
            {todo.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </form>
      </div>
    </>
  );
}

export default TodoList;
