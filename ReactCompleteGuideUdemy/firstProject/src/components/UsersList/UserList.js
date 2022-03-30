import React from "react";

const UserList =(props) => {
    return(

        <ul>
            {props.onView.map(item => <li>{item['username']+' ' +item['userage']}</li>)}
        </ul>

    );
};

export default  UserList;