import React, { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const addUserHandler = (event) => {
    // 리로드하는걸막아줌
    event.preventDefault();
    const userInf = {
      username : userName,
      userage : userAge,
    }
    props.onAdd(userInf)
  };
  const changeUserName = (event) => {
    setUserName(event.target.value)
  };
  const changeUserAge = (event) => {
    setUserAge(event.target.value)
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">사용자 이름</label>
      <input id='username' type="text" onChange={changeUserName}></input>
      <label htmlFor="username" >나이</label>
      <input id='age' type="number" onChange={changeUserAge}></input>
      <button type="submit">추가하기</button>
    </form>
  );
};

export default AddUser;
