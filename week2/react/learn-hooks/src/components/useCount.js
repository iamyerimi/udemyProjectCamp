import useCounter from "../hooks/CountHook";



//CountHook의 useCounter 가져와서 사용함.
function UseCount(initialCount) {
  const { count, increment } = useCounter(100);
  return (
    <div>
        <p>This is an useCount.js</p>
      <p>카운트: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}

export default UseCount;
