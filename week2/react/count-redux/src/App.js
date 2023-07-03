import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  // 1. useSelector 훅을 사용하여 스토어의 상태를 가져옵니다.
  const countStore = useSelector((state) => state.counter);

  // 2. useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
  const dispatch = useDispatch();

  // 3. 증가 버튼 클릭 시 처리하는 함수
  const handleIncrement = () => {
    // 3-1. increment 액션을 디스패치합니다.
    dispatch(increment());
  };

  // 4. 감소 버튼 클릭 시 처리하는 함수
  const handleDecrement = () => {
    // 4-1. decrement 액션을 디스패치합니다.
    dispatch(decrement());
  };

  return (
    <div>
      <h1>카운터</h1>
      {/* 5. 스토어에서 가져온 count 값을 출력합니다. */}
      <p>Count: {countStore.count}</p>
      {/* 6. 증가 버튼 클릭 시 handleIncrement 함수를 실행합니다. */}
      <button onClick={handleIncrement}>증가</button>
      {/* 7. 감소 버튼 클릭 시 handleDecrement 함수를 실행합니다. */}
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}

export default App;
