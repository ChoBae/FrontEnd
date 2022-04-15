import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";
import "./App.css";

function App() {
  // useState는 한번 선언된 초기값 이후에는 갱신만 된다. 상태변화시 루트 컴포넌트가 재실행 되어도 상태가 초기화 되지 않음
  const [showParagrapy, setShowParagrapy] = useState(false);
  const [allow, setAllow] = useState(false);
  // useCallback -> 함수를 리액트 저장공간에 저장해서 재실행 막아준다.(효율성)
  const toggleHandler = useCallback(() => {
    if (allow) {
      setShowParagrapy((preState) => !preState);
    }
  }, [allow]);

  const allowHandler = () => {
    setAllow(true);
  };
  console.log("나타날것");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput true={showParagrapy} />
      <Button onClick={allowHandler}>아래버튼 활성화</Button>
      <Button onClick={toggleHandler}>보여져라 얍</Button>
    </div>
  );
}

export default App;
