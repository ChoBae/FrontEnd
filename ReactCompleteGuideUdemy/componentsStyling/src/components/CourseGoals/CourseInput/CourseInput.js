import React, { useState } from "react";
// import styled from "styled-components"; ver3 스타일드컴포넌트
import Button from "../../UI/Button/Button";
// ver 4 css 모듈
import styles from './CourseInput.module.css';

// ver3 스타일드 컴포넌트
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     // 스타일드컴포넌트 기능 -> $을 사용하면 자바스크립트 형식으로 작성할 수 있다.
//     color: ${props=> (props.isvaild ? 'red': 'black')};
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props=> (props.isvaild ? 'red' : '#ccc') };
//     background: ${props=> (props.isvaild ? '#e49fcd' : 'tranparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }


// `;
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
   
      <div
      // ver4 css 모듈사용 
        className={`${styles['form-control']} ${!isVaild && styles.invaild}`}
      // styled-component 사용 -> props 활용
      // isvaild={!isVaild}
      
      // ver2 className을 수정하는 경우 $를 통해 여러가지의 스타일을 추가가능함
      // className={`form-control ${!isVaild ? "invaild" : ""}`} 
      >

        <label
        // ver1 css코드를 camelCase로 작성해줘야함 ps.이런 인라인식 css작성은 선호하지않음 
        // style={{ color: !isVaild ? "red" : "black" }} 
        >
          Course Goal
        </label>

        <input
          // ver1 css코드를 camelCase로 작성해줘야함
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
