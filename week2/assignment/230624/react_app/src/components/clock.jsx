import React, { useEffect, useState } from "react";

function Clock() {
  // 시간 상태(State)를 정의.
  const [time, setTime] = useState(new Date());

  // 컴포넌트가 마운트될 때와 언마운트될 때 실행되는 hook 사용.
  useEffect(() => {
    // 1초마다 시간을 업데이트하는 타이머를 설정.
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리.
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 시간을 원하는 형식으로 변환.
  const options = { hour: "numeric", minute: "numeric", hour12: false };
  const timeString = time.toLocaleTimeString(undefined, options);

  // 변환된 시간을 화면에 보여줌.
  return <div id="clock">{timeString}</div>;
}

export default Clock;
