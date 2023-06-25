import React, { useState } from "react";

function Greeting() {
  // 이름 상태(State)와 인사 상태(State)를 정의
  const [name, setName] = useState("");
  const [greetingVisible, setGreetingVisible] = useState(false);

  // 이름 입력 이벤트 핸들러
  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  // 엔터 키 입력 이벤트 핸들러
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // 인사를 보여주도록 상태를 변경
      setGreetingVisible(true);
    }
  };

  return (
    <>
      <div className="greetingWrap">
        <input
          className={greetingVisible ? "hidden" : "active"}
          id="writeName"
          type="text"
          placeholder="이름을 입력하세요."
          value={name}
          onChange={handleNameInput}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <p className={greetingVisible ? "active" : "hidden"} id="greeting">
          안녕하세요, <span id="addName">{name}</span>님!
        </p>
      </div>
    </>
  );
}

export default Greeting;
