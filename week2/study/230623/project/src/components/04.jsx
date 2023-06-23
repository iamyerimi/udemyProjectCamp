import React from "react";
// import React, { useState } from "react";

// 토글 만들기

// const Toggle = () => {
//   const [isOn, setIsOn] = useState(false);
//   const handleClick = () => {
//     setIsOn(!isOn);
//   };
//   return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
// };

// function Practice04() {
//   return (
//     <>
//       <p>this is a Practice04</p>
//       <Toggle />
//     </>
//   );
// }

function TodoList(props) {
  console.log(props.todos);
  const todos = props.todos;

  return (
    <ul>
      {todos.map((item) => (
        <li>{item.text}</li>
      ))}
    </ul>
  );
}

function Practice04() {
  const todos = [
    { id: 1, text: "todo list 1" },
    { id: 2, text: "todo list 2" },
    { id: 3, text: "todo list 3" },
    { id: 4, text: "todo list 4" },
    { id: 5, text: "todo list 5" },
  ];

  return <TodoList todos={todos} />;
}

export default Practice04;
