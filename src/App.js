import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (name, age) => {
    const lis = {
      name: name,
      age: age,
      id : Math.random()
    };

    setusersList([...usersList, lis]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
