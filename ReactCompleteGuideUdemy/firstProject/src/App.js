import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/UsersList/UserList";

const App = () => {
  
  const dummyUserData = [

  ];

  const [UserData, setUserData] = useState(dummyUserData);

  const AddUserList = (ud) => {
    // UserData ={
    //   username: ud.username,
    //   userage : ud.userage,
    //   ...UserData

    // }
    setUserData((preUserDate) => {
      return [ud,...preUserDate]
    })
    // console.log(UserData)
  };
  return (
    <div>
      <AddUser onAdd={AddUserList}></AddUser>
      <UserList onView={UserData}/>
    </div>
  );
};

export default App;
