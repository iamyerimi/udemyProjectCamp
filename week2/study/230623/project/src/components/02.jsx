import React, { useState } from "react";

function Practice02() {
  const [count, setCount] = useState(0);

  return (
    <>
        <p>this is a Practice02.</p>
        count: {count}
        <br />
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default Practice02;
