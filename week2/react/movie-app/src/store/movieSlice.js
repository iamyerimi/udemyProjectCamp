import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],              // 1. 영화 목록을 담는 배열
  selectedMovie: null,     // 2. 선택된 영화를 담는 변수, 초기값은 null
};

const moviesSlice = createSlice({
  name: "movies",           // 3. slice의 이름
  initialState,             // 4. 초기 상태
  reducers: {               // 5. 리듀서 함수
    setMovies: (state, action) => {
      state.movies = action.payload;   // 6. 영화 목록을 설정하는 액션
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;   // 7. 선택된 영화를 설정하는 액션
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;   // 8. 선택된 영화를 초기화하는 액션
    },
  },
});

export const {
  setMovies,
  setSelectedMovie,
  clearSelectedMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
