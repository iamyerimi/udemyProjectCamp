import { useReducer, useState } from "react";

// 초기 상태 값을 빈 배열로 설정
const initialState = [];

// 리듀서 함수 정의
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // 'ADD_TODO' 액션이 발생하면, 새로운 할 일을 추가하여 새로운 상태를 반환
      //   액션은 일반적으로 객체 형태로 구성되며, 최소한 type이라는 속성을 가지고 있어야 합니다.
      // 그 외에 추가적인 데이터를 전달하기 위해 payload라는 속성을 사용할 수 있습니다.
      // payload는 액션에 관련된 데이터를 담고 있는데, 이는 리듀서 함수에서 해당 액션을 처리할 때 사용됩니다.

      return [...state, action.payload];
    //   위의 코드에서는 ADD_TODO 액션이 발생하면 state에 새로운 할 일을 추가하는데, 이 때 action.payload를 사용하여 새로운 할 일을 추출하여 배열에 추가하게 됩니다.
    // 즉, action.payload는 액션 객체에 포함된 데이터를 의미하며, 리듀서 함수에서 해당 데이터를 활용하여 상태를 업데이트하는 데 사용됩니다.

    case "REMOVE_TODO":
      // 'REMOVE_TODO' 액션이 발생하면, 해당 ID를 가진 할 일을 제외하고 새로운 상태를 반환
      return state.filter((todo) => todo.id !== action.payload);

    default:
      // 기본적으로는 현재 상태를 반환
      return state;
  }
};

const TodoReducer = () => {
  // useReducer 훅을 사용하여 리듀서와 초기 상태를 적용
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      // 입력된 텍스트로 새로운 할 일 객체 생성
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      // 'ADD_TODO' 액션을 디스패치하여 새로운 할 일을 추가
      //   여기서 newTodo 객체가 payload에 할당되어 액션 객체가 생성됩니다. 리듀서 함수에서는 해당 액션의 payload 속성을 참조하여 필요한 데이터를 추출하고 처리합니다.
      dispatch({ type: "ADD_TODO", payload: newTodo });
      // 입력 필드 초기화
      setInput("");
    }
  };

  const removeTodo = (id) => {
    // 'REMOVE_TODO' 액션을 디스패치하여 해당 ID를 가진 할 일을 제거
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div>
      <h1>TodoReducer.js</h1>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="add your to-do"
      />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReducer;
