import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Movies.module.css";
import { useNavigate } from "react-router-dom";
import {
  setMovies,
  setSelectedMovie,
  clearSelectedMovie,
} from "../store/movieSlice";

function MovieHome() {
  const dispatch = useDispatch();                       // 1. useDispatch 훅을 사용하여 디스패치 함수를 가져옴
  const movies = useSelector((state) => state.movies.movies);             // 2. useSelector 훅을 사용하여 상태 값 가져옴
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);   // 3. useSelector 훅을 사용하여 상태 값 가져옴
  const navigate = useNavigate();                      // 4. useNavigate 훅을 사용하여 라우터 네비게이션 함수 가져옴

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        const data = await response.json();
        console.log(data.data);

        if (data.data && data.data.movies) {
          dispatch(setMovies(data.data.movies));       // 5. 영화 목록을 설정하는 액션을 디스패치
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getMovies();
  }, [dispatch]);

  const handleClick = (index) => {
    dispatch(setSelectedMovie(movies[index]));         // 6. 선택된 영화를 설정하는 액션을 디스패치
  };

  const closeModal = () => {
    dispatch(clearSelectedMovie());                    // 7. 선택된 영화를 초기화하는 액션을 디스패치
  };

  const handleChatClick = () => {
    closeModal();
    navigate("/chatting");                            // 8. 채팅 페이지로 네비게이션
  };

  return (
    <div>
      <div>
        <button onClick={handleChatClick}>채팅하기</button>
      </div>
      <div className={styles.movies}>
        {movies.map((movie, index) => (
          <div key={movie.id}>
            <div>
              <img
                key={movie.id}
                src={movie.medium_cover_image}
                alt="bgimg"
                onClick={() => handleClick(index)}      // 9. 이미지 클릭 시 handleClick 함수 실행
              />
            </div>
            <div>
              <p>{movie.title}</p>
              <p>{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>선택한 영화 제목: {selectedMovie.title}</p>
            <p>장르: {selectedMovie.genre}</p>
            <p>평점: {selectedMovie.rating}</p>
            <p>줄거리: {selectedMovie.summary}</p>
            <p>
              자세히: <a href={selectedMovie.url}>{selectedMovie.url}</a>
            </p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieHome;
