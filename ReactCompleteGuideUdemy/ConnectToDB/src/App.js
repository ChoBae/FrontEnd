import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // 비동기식 -> 처음에 썼던 then이랑 방식은 같으나 보기가 편함.
  async function fecthMoviesHandler() {
    // 클릭했을때 전의 에러 제거
    setError(null);
    // 클릭했을때 로딩시작
    setIsLoading(true);
    // 데이터 불러옴.
    try {
      const response = await fetch("https://swapi.dev/api/films");
      // ok-> 불린형 접속에러
      if (!response.ok) {
        throw new Error("어떤 에러가 있어요!");
      }
      // json형식 변환
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(transformedMovies);
      // 로딩끝 -> 데이터가 들어온 후
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }
  let content = <p>영화가 없습니다.</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
  }
  if (isLoading) {
    content = <p>로딩중..</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fecthMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
