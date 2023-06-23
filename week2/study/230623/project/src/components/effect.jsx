import React, { useEffect, useState } from "react";

// useEffect 사용해보기
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>{count}</p>
}

function Effect() {
  return <Timer />;
}
export default Effect;
