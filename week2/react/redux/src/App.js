import Count from "./components/Count";
import CounterReducer from "./components/CountReducer";
import TodoReducer from "./components/TodoReducer";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

const App = () => {


  const countStore = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };


  return (
    <div className="App">
      <Count />
      <CounterReducer />
      <TodoReducer />

      <div>
      <h1>Redux Counter</h1>
      <p>Count: {countStore.count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
    </div>
  );
};

export default App;
