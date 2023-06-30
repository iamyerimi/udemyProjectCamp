import React, { useReducer } from "react";

// 초기 상태 정의
const initialState = {
  theme: "light", // 초기 theme 값을 "light"로 설정
};

// 리듀서 함수 정의
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      // TOGGLE_THEME 액션이 발생했을 때
      // 현재 theme 값을 토글하여 새로운 상태를 반환.
      // theme 값이 "light"일 경우 "dark"로, "dark"일 경우 "light"로 변경.
      return {
        ...state, // 기존의 state를 복사하여 변경된 값을 덮어씀.
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      // 액션이 일치하지 않을 경우 기존의 상태를 반환.
      return state;
  }
};

const ThemeSwitcher = () => {
  // useReducer 훅을 사용하여 state와 dispatch 함수를 가져옴.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>theme color: {state.theme}</h2>
      {/* 버튼을 클릭할 때 TOGGLE_THEME 액션을 dispatch함. */}
      {/* dispatch 함수는 액션 객체를 전달하여 상태를 업데이트. */}
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        toggle(change color)
      </button>
    </div>
  );
};

export default ThemeSwitcher;
