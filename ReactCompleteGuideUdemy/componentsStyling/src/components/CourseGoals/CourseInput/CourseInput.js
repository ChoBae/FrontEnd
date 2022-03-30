import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  // 상태값
  const [enteredValue, setEnteredValue] = useState("");
  const [isVaild, setIsVaild] = useState(true);
  // 인풋값 변경사항
  const goalInputChangeHandler = (event) => {
    //  인풋값 들어왔을때 에러표시 제거
    if (event.target.value.trim().length > 0) {
      setIsVaild(true);
    }
    // 인풋값 변경시 업데이트
    setEnteredValue(event.target.value);
  };
  // 제출버튼 클릭시 상태 끌어올리기
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim() -> 공백제거
    if (enteredValue.trim().length === 0) {
      setIsVaild(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isVaild ? 'invaild': ''}`}>
        {/* css코드를 camelCase로 작성해줘야함 */}
        {/* 이런 인라인식 css작성은 선호하지않음 */}
        <label 
        // style={{ color: !isVaild ? "red" : "black" }}
        >Course Goal</label>

        <input
          // style={{
          //   borderColor: !isVaild ? "red" : "black",
          //   background: !isVaild ? "salmon" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
