import { useState, useEffect } from "react";
// 커스텀훅 연습
// 커스텀훅을 생성할때 리액트 기존의 훅을 사용가능함.
// 매개변수를 주어줄 수 있다.
const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 매개 변수 값을 판단해서 다른 연산을 한다.
      if (forward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return counter;
};

export default useCounter;
