import React from "react";
// 내부 css
import classes from "./Button.module.css";
// 버튼 컴포넌트
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
