import { useEffect, useState } from "react";
import styles from "styles/Movies.module.css";

function Test() {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 제목을 저장하는 상태 변수

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        const data = await response.json();
        console.log(data.data);

        if (data.data && data.data.movies) {
          setMovies(data.data.movies);
          // setLoading(false);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getMovies();
  }, []);

  //handleClick
  const handleClick = (index) => {
    // console.log("clicked");
    setSelectedMovie(movies[index]);
    console.log(movies[index].title);
  };
  return (
    <div>
      <div>
        {selectedMovie && (
          <>
            <p>선택한 영화 제목: {selectedMovie.title}</p>
            <p>장르: {selectedMovie.genre}</p>
            <p>평점: {selectedMovie.rating}</p>
            <p>줄거리: {selectedMovie.summary}</p>
            <p>
              자세히: <a href={selectedMovie.url}>{selectedMovie.url}</a>
            </p>
          </>
        )}
      </div>
      <div className={styles.movies}>
        {movies.map((movie, index) => (
          <div key={movie.id}>
            <div>
              <img
                key={movie.id}
                src={movie.medium_cover_image}
                alt="bgimg"
                onClick={() => handleClick(index)} // 클릭 이벤트 핸들러에 인덱스 전달
              />
            </div>
            <div>
              <p>{movie.title}</p>
              <p>{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
