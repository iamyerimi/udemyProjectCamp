import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { logger } from "redux-logger";

// 1. Redux 스토어 생성
const store = configureStore({
  reducer: {
    counter: counterReducer, // 1-1. counterReducer를 counter 슬라이스에 등록
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // 1-2. 미들웨어 추가 (redux-logger)
});

export default store;

// Redux 스토어를 생성합니다.
// 1-1. counterReducer를 counter 슬라이스에 등록합니다. 슬라이스의 이름은 counter이고, 해당 슬라이스는 counterReducer를 이용하여 상태를 관리합니다.
// 1-2. getDefaultMiddleware 함수를 사용하여 기본 미들웨어를 가져온 후, logger 미들웨어를 추가합니다. logger는 액션과 상태 변경을 콘솔에 로그로 출력하는 미들웨어입니다.
// 이렇게 수정된 코드를 사용하면 Redux Toolkit의 configureStore를 통해 스토어를 생성하고, 필요한 리듀서와 미들웨어를 설정할 수 있습니다.