// react useState,useRef 훅 사용
import React, { useState,useRef } from "react";

// 외부 css
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// 내부 css
import classes from "./AddUser.module.css";
// useState 사용
// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
//   const [error, setError] = useState();
//   // 사용자 입력 추가 핸들러 
//   const addUserHandler = (event) => {
//     // 리로드 하는걸 막아줌.
//     event.preventDefault();
//     //  입력값 유효성 검사
//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "입력값 에러",
//         message: "이름과 나이를 모두 입력해주세요 !",
//       });
//       return;
//     }
//     // 입력은 항상 문자열이라서 +로 정수화
//     if (+enteredAge < 1) {
//       setError({
//         title: "나이값 에러",
//         message: "1살 이상의 나이를 입력해주세요 !",
//       });
//       return;
//     }
//     // 유효성 검사를 통과하면 데이터 올려줌.
//     props.onAddUser(enteredUsername, enteredAge);
//     // 기본 값 공백처리
//     setEnteredUsername("");
//     setEnteredAge("");
//   };
//   //  이름 입력값 핸들러
//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };
//   // 나이 입력값 핸들러
//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };
//   // 에러 메세지 핸들러 -> &&은 True(존재)할때 출력해준다는 것이고, 즉 null 값이 되면 출력을 제거함 (isdisable)? 느낌? 
//   const errorHandler = () => {
//     setError(null);
//   };
//   return (
//     // 에러 표시 컴포넌트
//     <React.Fragment>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onCheck={errorHandler}
//         ></ErrorModal>
//       )}
//       {/* 사용자 입력  */}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">사용자 이름</label>
//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//           ></input>
//           <label htmlFor="age">나이</label>
//           <input
//             id="age"
//             type="number"
//             value={enteredAge}
//             onChange={ageChangeHandler}
//           ></input>
//           <Button type="submit">추가하기</Button>
//         </form>
//       </Card>
//     </React.Fragment>
//   );
// };

// useRef 사용 -> 변하지않는 단일값을 입력받을때 효과적 (확실히 LEAN JS가 된다.)
const AddUser = (props) => {
  // useRef 사용 -> 상태말고 값만 가져올때 상당히 꼼수같음
  const Username = useRef();
  const Age = useRef();
  const [error, setError] = useState();

  // 사용자 입력 추가 핸들러 
  const addUserHandler = (event) => {
    // 리로드 하는걸 막아줌.
    event.preventDefault();
    // Ref 훅 사용 과정 -> target.value X current.value O
    const enteredUsername = Username.current.value;
    const enteredAge = Age.current.value;
    //  입력값 유효성 검사
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "입력값 에러",
        message: "이름과 나이를 모두 입력해주세요 !",
      });
      return;
    }
    // 입력은 항상 문자열이라서 +로 정수화
    if (+enteredAge < 1) {
      setError({
        title: "나이값 에러",
        message: "1살 이상의 나이를 입력해주세요 !",
      });
      return;
    }
    // 유효성 검사를 통과하면 데이터 올려줌.
    props.onAddUser(enteredUsername, enteredAge);
    // 공백 처리 -> useRef에서는 비제어 처리기 때문에 dom형식을 직접 수정해야함 <- 좋다고 할 순 없음(꼼수라함)
    // dom 형식을 직접 수정해야해서 위의 경우 틀렸음.
    // enteredUsername = '';
    // enteredAge = '';
    Username.current.value = '';
    Age.current.value = '';
  };

  // 에러 메세지 핸들러 -> &&은 True(존재)할때 출력해준다는 것이고, 즉 null 값이 되면 출력을 제거함 (isdisable)? 느낌? 
  const errorHandler = () => {
    setError(null);
  };

  return (
    // 에러 표시 컴포넌트
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCheck={errorHandler}
        ></ErrorModal>
      )}
      {/* 사용자 입력  */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">사용자 이름</label>
          <input
            id="username"
            type="text"
            ref={Username}
          ></input>
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            ref={Age}
          ></input>
          <Button type="submit">추가하기</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
