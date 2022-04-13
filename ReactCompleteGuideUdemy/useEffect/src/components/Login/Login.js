import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

// 리듀서 함수 -> 작업하던 컴포넌트가 아니라 밖에서 함수형으로 작업해줌
// 파라미터값으로 가장 최근의 값인 state와 현재 작업의 action이 주어진다.
// 그리고 2개의 인수가 주어진다.
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useReducer 사용 -> 여러개의 state 값을 관리할때 좋은듯 -> state를 여러가지 형태로 
  // useState와 비슷하게 두가지의 함수의 파라미터값이 주어지고, 인자로는 함수와, 초기값이 주어진다.
  // 인자의 함수같은 경우에는 해당 컴포넌트의 바깥에서 작업해준다.(내용이 관련이 없어서)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  // useContext 사용 -> 컴포넌트끼리 연결
  const AuthCtx = useContext(AuthContext);

  // 객체 디스터럭쳐링 -> 객체 전체가 아니라 특정 속성을 useEffect의 종속성으로 전달
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  // useEffect 종속줬을때 사용의 예
  // 기존의 state시에는 서버에 계속 정보를 넘겨준다고 한다면 밑의 경우는 타이머를 사용해서 어느정도 작성을 마쳤을때 정보를 넘겨준다.
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("다 작성했을때 로그되야함.");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    // 클린업 함수 -> 작업(입력)을 마쳤을때 값처리?
    return () => {
      console.log("수정될때마다 로그");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };
  //
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
    // setEmailIsValid(emailState.isVaild);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // useContext에 이메일, 비밀번호 전달
    AuthCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailIsValid}
          type="email"
          id="email"
          label="이메일"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          isValid={passwordIsValid}
          type="password"
          id="password"
          label="비밀번호"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
