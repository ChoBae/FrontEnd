import { Component } from "react";
import classes from "./User.module.css";
// 클래스형 컴포넌트 -> 요새는 함수형을 쓴다. 확실히 함수형이 편한 느낌 -> props를 줄때 this로 예약해줘야함.
class User extends Component {
  // useEffect와 같은 기능 -> 클린업 함수 -> 끝날때 마다 실행
  componentWillUnmount(){
    console.log("함수형 컴포넌트의 useEffect의 클린업과 비슷해!")
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
