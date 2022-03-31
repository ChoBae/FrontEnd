import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    // 리로드하는걸막아줌
    event.preventDefault();
    const userInf = {
      username: userName,
      userage: userAge,
    };
    props.onAdd(userInf);
  };
  const changeUserName = (event) => {
    setUserName(event.target.value);
  };
  const changeUserAge = (event) => {
    setUserAge(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <div>
          <div>
            <label htmlFor="username">사용자 이름</label>
          </div>
          <div>
            <input id="username" type="text" onChange={changeUserName}></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="username">나이</label>
          </div>
          <div>
            <input id="age" type="number" onChange={changeUserAge}></input>
          </div>
        </div>
        <div>
          <button type="submit">추가하기</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
