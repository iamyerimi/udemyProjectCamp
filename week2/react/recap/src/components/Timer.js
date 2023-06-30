// Timer.js

import React, { useState, useEffect } from "react";

const Timer = () => {
  // 상태 변수 'seconds'를 생성하고 초기값 0을 할당합니다.
  const [seconds, setSeconds] = useState(0);

  // useEffect를 사용하여 컴포넌트가 마운트될 때마다 타이머를 시작합니다.
  useEffect(() => {
    // 1초마다 'seconds' 값을 1씩 증가시키는 타이머를 생성합니다.
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => {
      console.log("리턴되었습니다"); // 컴포넌트가 언마운트될 때 호출됩니다.
      clearInterval(timer); // 타이머를 정리합니다.
    };
  }, []); // 빈 배열을 의미하며, 이펙트는 컴포넌트가 마운트될 때만 실행됩니다.

  // 화면에 타이머 값을 출력합니다.
  return (
    <div>
      <h2>초: {seconds}</h2>
    </div>
  );
};

export default Timer;
