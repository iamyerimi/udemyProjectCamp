import React, { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
        <p>This is a Counter.js</p>
      <p>카운트: {count}</p>
      <button onClick={onClick}>증가</button>
    </div>
  );
};

export default Counter;
