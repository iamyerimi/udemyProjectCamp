// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year/${id}`); // API_URL을 실제 API 엔드포인트로 대체해야 합니다.
//       const data = await response.json();

//       // id에 해당하는 영화 정보 찾기
//       const foundMovie = data.find((movie) => movie.id === Number(id));
//       setMovie(foundMovie);
//       console.log("-------------", setMovie(foundMovie));
//     };

//     fetchMovie();
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <p>{movie.summary}</p>
//     </div>
//   );
// }

// export default MovieDetails;
