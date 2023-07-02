// JSX 코드
import { useEffect, useState } from "react";
import styles from "../styles/Movies.module.css";
import { useNavigate } from "react-router-dom";

function MovieHome() {
  // movies: 영화 목록을 저장하는 상태 변수
  // setMovies: movies 상태 변수를 업데이트하는 함수
  const [movies, setMovies] = useState([]);

  // selectedMovie: 선택한 영화 정보를 저장하는 상태 변수
  // setSelectedMovie: selectedMovie 상태 변수를 업데이트하는 함수
  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행되는 비동기 함수
    const getMovies = async () => {
      try {
        // API에서 영화 목록 가져오기
        const response = await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        const data = await response.json();
        console.log(data.data);

        if (data.data && data.data.movies) {
          setMovies(data.data.movies); // 가져온 영화 목록을 movies 상태 변수에 저장
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getMovies(); // 컴포넌트가 마운트되었을 때 영화 목록 가져오기
  }, []);

  // 영화를 클릭했을 때 실행되는 함수
  const handleClick = (index) => {
    setSelectedMovie(movies[index]); // 선택한 영화 정보를 selectedMovie 상태 변수에 저장
  };

  // 모달을 닫을 때 실행되는 함수
  const closeModal = () => {
    setSelectedMovie(null); // selectedMovie 상태 변수 초기화하여 모달 닫기
  };

  const handleChatClick = () => {
    closeModal();
    navigate("/chatting"); // 버튼 클릭 시 Chatting 컴포넌트로 이동
  };

  return (
    <div>
      <div>
        <button onClick={handleChatClick}>채팅하기</button> 
      </div>
      {/* 영화 목록 */}
      <div className={styles.movies}>
        {movies.map((movie, index) => (
          <div key={movie.id}>
            <div>
              {/* 영화 이미지 클릭 시 handleClick 함수 호출 */}
              <img
                key={movie.id}
                src={movie.medium_cover_image}
                alt="bgimg"
                onClick={() => handleClick(index)}
              />
            </div>
            <div>
              <p>{movie.title}</p>
              <p>{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 선택한 영화가 있을 때 모달 표시 */}
      {selectedMovie && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* 선택한 영화 정보 표시 */}
            <p>선택한 영화 제목: {selectedMovie.title}</p>
            <p>장르: {selectedMovie.genre}</p>
            <p>평점: {selectedMovie.rating}</p>
            <p>줄거리: {selectedMovie.summary}</p>
            <p>
              자세히: <a href={selectedMovie.url}>{selectedMovie.url}</a>
            </p>
            {/* 모달 닫기 버튼 */}
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieHome;
