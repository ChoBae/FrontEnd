import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.onView.map((item) => (
          <li>{item["username"] + " " + item["userage"]}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
