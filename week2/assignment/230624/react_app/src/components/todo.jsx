import React, { useState } from "react";

function Todo() {
  // 할 일을 저장할 상태 변수와 입력 필드의 값 상태 변수를 정의.
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  // 엔터 키를 눌렀을 때 할 일을 추가하는 함수.
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  // 할 일을 추가하는 함수.
  const addTodo = () => {
    // 입력 필드의 값이 공백인지 확인.
    if (todoValue.trim() === "") {
      return;
    }

    // 이전 할 일 목록에 새로운 할 일을 추가, 새로운 할 일 목록을 생성.
    setTodos((prevTodos) => [...prevTodos, todoValue]);
    // 입력 필드의 값을 초기화합니다.
    setTodoValue("");
  };

  // 할 일을 제거하는 함수.
  const removeTodo = (index) => {
    // 주어진 인덱스에 해당하는 할 일을 제외한 이전 할 일 목록을 필터링, 새로운 할 일 목록을 생성.
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* 할 일을 입력 필드 인풋..*/}
     할 일을 입력하세요. <input
        type="text"
        value={todoValue}
        onChange={(event) => setTodoValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {/* 할 일 목록을 매핑, 각 할 일과 삭제 버튼 보여줌. */}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* 삭제 버튼을 클릭하면 해당 인덱스의 할 일을 제거. */}
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
