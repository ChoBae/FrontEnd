import React from "react";
import ReactDOM from "react-dom";
// 외부 css
import Card from "./Card";
import Button from "./Button";

// 내부 css
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCheck}></div>;
};

const OverlayModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onCheck}>확인</Button>
      </footer>
    </Card>
  );
};

// 에러 모달 컴포넌트 -> 에러 메세지 표현.
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* 리액트 돔의 포탈을 이용해서 제대로된 구조를 조정함. */}
      {ReactDOM.createPortal(
        <Backdrop onCheck={props.onCheck} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          onCheck={props.onCheck}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
