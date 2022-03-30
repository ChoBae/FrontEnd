import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/UsersList/UserList";

const App = () => {
  
  const dummyUserData = [
    {
      key: "e1",
      username: "cho",
      userage: 29,
    },
    {
      key: "e2",
      username: "sin",
      userage: 31,
    },
  ];

  const [UserData, setUserData] = useState(dummyUserData);

  const AddUserList = (ud) => {
    UserData ={
      username: ud.username,
      userage : ud.userage
      ...
    }
  };
  return (
    <div>
      <h1>사용자 정보 추가</h1>
      <AddUser onAdd={AddUserList}></AddUser>
      <UserList onView={UserData}/>
    </div>
  );
};

export default App;
