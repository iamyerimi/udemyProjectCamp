import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const countStore = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>카운터</h1>
      <p>Count: {countStore.count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}

export default App;
