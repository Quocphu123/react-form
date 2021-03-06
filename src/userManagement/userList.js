import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  deleteUser, getUserDetail } from "../action/userAction";

const UserList = () => {
  const dispatch = useDispatch();

  
  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleSelected = (userId) => {
    dispatch(getUserDetail(userId));
  };

  const { users } = useSelector((state) => {
    return {
      users: state.user.users,
    };
  });

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Mã SV</th>
          <th>Họ Tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => {
                    handleSelected(user.id);
                  }}
                  className="btn btn-primary"
                >
                  Cập nhật
                </button>
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
