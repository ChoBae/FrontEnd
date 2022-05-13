import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  // form이 입력받았을때 input의 값을 받아오는 useRef
  const NameInputRef = useRef("");
  // useState
  // 이름을 입력할때마다 확인
  const [enteredName, setEnteredName] = useState("");
  // 이름의 유효성을 확인
  const [namevalid, setNameValid] = useState(false);
  // 인풋을 클릭했는지 확인
  const [enteredNameTouched, setEnterNameTouched] = useState(false);

  useEffect(() => {
    if (namevalid) {
      console.log("이름의 입력값이 잘들어옴");
    }
  }, [namevalid]);
  // input의 값이 변경될때마다 변경
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // enterName이 아닌 event.target.value을 사용하는 이유는 바로 변경값을 불리오지 못해서(비동기식) 
    if (event.target.value.trim() !== "") {
      setNameValid(true);
    }
  };
  // 사용자가 input에서 포커싱을 잃었을때 확인
  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
    // 
    if (enteredName.trim() === "") {
      setNameValid(false);
    }
  };
  const formSubmissionHandler = (event) => {
    // form형식은 제출되었을때 웹을 리로드하는데 그 과정을 막아줌. (저장된 데이터가 사라지기 때문에)
    event.preventDefault();
    setEnterNameTouched(true);

    if (enteredName.trim() === "") {
      setNameValid(false);
      return;
    }
    setNameValid(true);
    // useState
    console.log(enteredName);
    // useRef
    const enteredValue = NameInputRef.current.value;
    console.log(enteredValue);
    // NameInputRef.current.value = ''; * dom형식 자체를 변경 s하는 것이라서 바람직하지 않다.
    // 입력되었을때 빈칸 만들기
    setEnteredName("");
  };
  const nameInputIsInValid = !namevalid && enteredNameTouched;
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={NameInputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
