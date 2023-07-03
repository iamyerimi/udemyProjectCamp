import { useReducer } from "react";

const initialState = 10; // 초기 상태 값

// 리듀서 함수
const reducer = (state, action) => {
  //switch 문을 사용하여 각 액션 타입에 따른 상태 변화를 처리합니다.
  switch (action.type) {
    case "INCREMENT":
      return state + 1; // 상태를 1 증가시킴
    case "DECREMENT":
      return state - 1; // 상태를 1 감소시킴
    case "RESET":
      return initialState; // 상태를 초기 상태로 리셋
    default:
      return state; // 액션이 없을 때는 상태를 그대로 반환
  }
};

export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // reducer: 리듀서 함수로, 액션의 타입에 따라 상태를 업데이트하는 로직을 구현합니다.
  // useReducer(reducer, initialState): useReducer 훅을 사용하여 상태(state)와 디스패치(dispatch) 함수를 가져옵니다.
  // useReducer를 통해 상태(state)와 디스패치(dispatch) 함수를 가져옴

  return (
    <div>
      <h1>CounterReducer.js</h1>
      <p>숫자: {count}</p>
      {/* dispatch: 액션을 디스패치하는 함수로, 상태를 업데이트합니다. */}
      {/* 버튼을 클릭할 때마다 해당 액션을 디스패치하여 상태를 업데이트합니다. */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
