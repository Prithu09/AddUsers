import React from "react";
import Card from "../Ui/Card";
import classes from "./UsersList.module.css";

const UsersList = function (props) {
    console.log(props.users)
  return (
    <Card className={classes.users}>
      {console.log(classes.users)}

      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
