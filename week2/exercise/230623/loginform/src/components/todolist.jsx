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
  const [todo, setTodo] = useState("");
  const handleOnchage = (event) => {
    setTodo(event.target.value);
  };

const handleClick = () => {

}
  const input = document.getElementById("todo");
  return (
    <>
      <div id="todoList">
        <input
          id="todo"
          type="text"
          onChange={handleOnchage}
          placeholder="write down your to-do."
        />
        <button
          id="btn"
           onClick={handleClick}
        >
          add
        </button>
        <div id="test">
          {input.map((comp, idx) => {
            return <li key={idx}>{comp}</li>;
          })}
        </div>
      </div>
    </>
  );
}

export default TodoList;
