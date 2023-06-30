import React, { useReducer } from "react";

// 초기 상태를 정의합니다.
const initialState = 0;

// 리듀서 함수를 정의합니다. 리듀서는 현재 상태와 액션을 받아서 다음 상태를 반환합니다.
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const CountReducer = () => {
  // useReducer 훅을 사용하여 상태와 디스패치 함수를 받아옵니다. count는 현재 상태를 나타내며, dispatch는 액션을 디스패치하는 함수입니다.
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>숫자세기</h1>
      <p>값: {count}</p>
      {/* 클릭 시 INCREMENT 액션을 디스패치하여 상태를 증가 */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
    </div>
  );
};

export default CountReducer;
