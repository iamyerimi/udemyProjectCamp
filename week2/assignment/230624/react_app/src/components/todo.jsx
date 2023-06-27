import React, { useState } from "react";

function Todo() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (todoValue.trim() === "") {
      return;
    }

    setTodos((prevTodos) => [...prevTodos, todoValue]);
    setTodoValue("");
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
     할 일을 입력하세요 <input
        type="text"
        value={todoValue}
        onChange={(event) => setTodoValue(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
