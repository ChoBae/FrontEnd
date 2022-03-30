import React from 'react'
// ver 3리액트 지원 CSS 모듈 -> 스타일드컴포넌트와 인라인 CSS작성법의 장점을 합친?
//  CSS 모듈은 css 형식을 객체화 시킨다고 생각하면 편한듯
//  범위지정과 css코드와 js 코드를 구별한다는점이 좋음.
import styles from './Button.module.css'
// import styled from "styled-components"; 
// ver2 스타일드 컴포넌트 양식
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   // 미디어 쿼리 적용 가능 -> 다양한 디스플레이 적용
  // @media (min-width: 768px) {
  //   width: auto;
  // }

//   // button-> &(가상선택자)를 통해 적용
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return(
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
