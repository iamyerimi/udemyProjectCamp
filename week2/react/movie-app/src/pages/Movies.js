import { useEffect, useState } from "react";
import styles from "styles/Movies.module.css";
// import { useParams } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";

function Movies() {
  // 클릭시 상세페이지 open.
  const MovieDetails = (event) => {
    const imageURL = event.currentTarget.dataset.url;
    console.log("클릭된 이미지 URL:", imageURL);
    window.open(imageURL);
  };

  // 연습
  // const MovieDetails =(event) =>{
  // const mvd = event.currentTarget.dataset;
  // console.log("mvd");
  // console.log(mvd);
  // return(
  // <div className="mvd">
  //
  //
  // </div>
  // )
  // }

  // 이제 id 변수를 사용하여 해당하는 영화 정보를 찾을 수 있습니다.
  // const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    // if (json.data && json.data.movies) {
    const moviesData = json.data.movies;
    setMovies(moviesData);
    setLoading(false);

    console.log(moviesData);
    // }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.movies}>
        {!loading
          ? movies.map((movie) => (
              <>
                <div key={movie.id}>
                  <div>
                    <img
                      onClick={MovieDetails}
                      src={movie.medium_cover_image}
                      alt="bgImage"
                      data-url={movie.url}
                    />
                  </div>
                  <div>
                    <p>{movie.title}</p>
                    <p>rating: {movie.rating}</p>
                  </div>
                </div>
              </>
            ))
          : null}
      </div>
      <Footer />
    </>
  );
}
export default Movies;
