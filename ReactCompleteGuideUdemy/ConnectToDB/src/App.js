import React, { useCallback, useEffect, useState } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // 비동기식(async) -> 처음에 썼던 then이랑 방식은 같으나 보기가 편함.
  const fecthMoviesHandler = useCallback(async () => {
    // 클릭했을때 전의 에러 제거
    setError(null);
    // 클릭했을때 로딩시작
    setIsLoading(true);
    // 데이터 불러옴 -> await은 데이터가 받아올때까지 비동기처리를 멈춰줌
    try {
      const response = await fetch(
        "https://react-http-9ba90-default-rtdb.firebaseio.com/movies.json"
      );
      // ok-> 불린형 접속에러(위에 링크가 잘못되었을때 나타남(접속오류일때))
      if (!response.ok) {
        throw new Error("어떤 에러가 있어요!");
      }
      // json형식 변환
      const data = await response.json();
      console.log(data);

      const loadedmovies = [];
      for (const key in data) {
        loadedmovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedmovies);
      // 로딩끝 -> 데이터가 들어온 후
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);
  // useEffect를 활용해서 처음 렌더링할때 데이터를 받아온다.
  useEffect(() => {
    fecthMoviesHandler();
  }, [fecthMoviesHandler]);
  // db에 영화 추기하기
  async function addMovieHandler(movie) {
    // fetch의 두번째 메소드에 값을 넣어 기본값인 get(데이터 받아오기)가 아닌 POST(데이터 추가하기)를 실행
    // 비동기식 데이터
    const response = await fetch(
      "https://react-http-9ba90-default-rtdb.firebaseio.com/movies.json",
      // 양식
      {
        method: "POST",
        body: JSON.stringify(movie),
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // 여기 이후에 에러처리라든지 등등의 코드 작성
    console.log(data)

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fecthMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
