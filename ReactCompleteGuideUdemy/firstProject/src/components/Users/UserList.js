import React from "react";

// 내부 css
import classes from "./UserList.module.css";
// 외부 css
import Card from "../UI/Card";
// 유저 리스트 컴포넌트 -> 유저 리스트 값 표시 
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
          {/* map()을 활용해서 현재 유저의 수만큼만 리스트 처리해줌. */}
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} 살)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
