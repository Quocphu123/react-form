import React from "react";
import UserForm from "./userForm";
import UserList from "./userList";

const UserManagement = () => {
  return (
    <div className="container">
      <h1 className="text-center">User Managament (Hook)</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserManagement;
