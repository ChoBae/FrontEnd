import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
// 루트 컴포넌트
const App = () => {
  //  유저 리스트 관리
  const [usersList, setUsersList] = useState([]);
  // 유저 추가 이벤트가 넘어왔을때 유저리스트에 추가.
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        // id 값을 넣어줘야함.
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      {/* 유저 추가 컴포넌트 */}
      <AddUser onAddUser={addUserHandler}></AddUser>
      {/* 유저 리스트 컴포넌트 */}
      <UserList users={usersList} />
    </div>
  );
};

export default App;
