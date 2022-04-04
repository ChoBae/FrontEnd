import React from "react";

// 외부 css
import Card from "./Card";
import Button from "./Button";

// 내부 css
import classes from "./ErrorModal.module.css";

// 에러 모달 컴포넌트 -> 에러 메세지 표현.
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCheck}></div>
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
    </div>
  );
};

export default ErrorModal;
