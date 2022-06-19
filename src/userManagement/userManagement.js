import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../action/userAction";
import UserForm from "./userForm";
import UserList from "./userList";
import UserSearch from "./userSearch";

const UserManagement = () => {
  const searchValue = useSelector((state) => state.user.searchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [searchValue]);

  return (
    <div className="container">
      <h1 className="text-center">User Managament (Hook)</h1>
      <UserForm />
      <UserSearch />
      <UserList />
    </div>
  );
};

export default UserManagement;
