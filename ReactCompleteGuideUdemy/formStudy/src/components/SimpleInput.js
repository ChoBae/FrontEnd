import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  // 05.13 리팩토링 과정
  // useState
  // 이름을 입력할때마다 확인
  const [enteredName, setEnteredName] = useState("");
  // 인풋을 클릭했는지 확인
  const [enteredNameTouched, setEnterNameTouched] = useState(false);
  // 전체 form 양식이 유효한지 체크
  const [formIsValid, setFormIsValid] = useState(false);
  // boolean 유효성 체크
  // 이름의 유효성을 확인 -> 이전 useState로 확인했음
  const enteredNameIsValid = enteredName.trim() !== "";
  // 종합적인 유효성 체크(이름의 유효성, 인풋 포커싱 확인)
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    // 각각의 유효성을 체크하고 최종적으로 폼이 유효한지 체크한다.
    // 체크할 유효성이 늘어나면 여기 추가해주면됨.
    if (enteredNameIsValid){
      setFormIsValid(true)
    }
    else{
      setFormIsValid(false)
    }
  }, [enteredNameIsValid]);
  // input의 값이 변경될때마다 변경
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // // enterName이 아닌 event.target.value을 사용하는 이유는 바로 변경값을 불리오지 못해서(비동기식)
    // if (event.target.value.trim() !== "") {
    //   setNameValid(true);
    // }
  };
  // 사용자가 input에서 포커싱을 잃었을때 확인
  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
  };
  const formSubmissionHandler = (event) => {
    // form형식은 제출되었을때 웹을 리로드하는데 그 과정을 막아줌. (저장된 데이터가 사라지기 때문에)
    event.preventDefault();
    // form이 제출되었을때는 인풋을 한번이라도 본 것이기 때문에
    setEnterNameTouched(true);
    // 이름의 유효성이 false일때 return
    if (!enteredNameIsValid) {
      return;
    }
    // useState
    console.log(enteredName);
    // // useRef
    // const enteredValue = NameInputRef.current.value;
    // console.log(enteredValue);
    // NameInputRef.current.value = ''; * dom형식 자체를 변경 s하는 것이라서 바람직하지 않다.

    // 초기화 과정
    // 입력되었을때 빈칸 만들기
    setEnteredName("");
    // 입력되었을때 포커싱 초기값 초기화
    setEnterNameTouched(false);
  };
  // 유효성체크 후 그에 맞는 css 변경
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={NameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">이름을 입력하지 않았네요!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
