import { createSlice } from "@reduxjs/toolkit";

// 1. 초기 상태 정의
const initialState = { count: 0 };

// 2. createSlice를 사용하여 리듀서와 액션들을 한 번에 정의
const counterSlice = createSlice({
  name: "counter", // 2-1. 슬라이스의 이름 설정
  initialState, // 2-2. 초기 상태 설정
  
  //reducers 객체 내부에 각 액션의 처리 로직을 작성
  reducers: { 
    increment: (state) => {
      // 3-1. increment 액션 처리
      state.count = state.count + 1; // 3-2. 액션 처리 상태 변경(증가)
    },
    decrement: (state) => {
      // 4-1. decrement 액션 처리
      state.count = state.count - 1; // 4-2. 상태 변경
    },
  },
});

// 5. 액션 생성자 함수 추출
export const { increment, decrement } = counterSlice.actions;

// 6. 리듀서 추출
export default counterSlice.reducer;
