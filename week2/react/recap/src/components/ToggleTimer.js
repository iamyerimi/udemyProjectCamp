// ToggleTimer.js

import React, { useState } from "react";
import Timer from "./Timer";

const ToggleTimer = () => {
  // 상태 변수 'showTimer'를 생성하고 초기값을 true로 설정합니다.
  const [showTimer, setShowTimer] = useState(true);

  // 타이머 보이기/숨기기를 처리하는 핸들러 함수입니다.
  const handleToggleTimer = () => {
    setShowTimer((prev) => !prev); // 'showTimer' 값을 반전시킵니다.
  };

  // 화면에 타이머를 보여줍니다. 'showTimer' 값이 true일 때만 Timer 컴포넌트가 렌더링됩니다.
  return (
    <div>
      {showTimer && <Timer />} {/* showTimer 값이 true일 때만 Timer 컴포넌트가 렌더링됩니다. */}
      
      {/* 'showTimer' 값에 따라 버튼의 라벨을 변경하고 클릭 이벤트를 처리합니다. */}
      <button onClick={handleToggleTimer}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
};

export default ToggleTimer;
