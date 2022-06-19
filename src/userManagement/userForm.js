import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../action/userAction";
const UserForm = () => {
  const [values, setValues] = useState({
    id: "",
    phone: "",
    name: "",
    email: "",
  });
  const selectedUser = useSelector((state) => state.user.selectedUser);

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const onSuccess = () => {
    setValues({ id: "", phone: "", name: "", email: "" });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (selectedUser?.id) {
      // cập nhật
      dispatch(updateUser(selectedUser.id, values, onSuccess));
    } else {
      // thêm mới
      dispatch(createUser(values, onSuccess));
    }
  };

  useEffect(() => {
    setValues({ ...selectedUser });
  }, [selectedUser]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="ID">Mã Sinh Viên:</label>
            <input
              onChange={handleChange}
              type="text"
              name="id"
              className="form-control"
              value={values.id}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber">Số điện thoại:</label>
            <input
              onChange={handleChange}
              type="number"
              name="phone"
              className="form-control"
              value={values.phone}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="name">Họ Tên:</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="form-control"
              value={values.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ID">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              value={values.email}
            />
          </div>
        </div>
        <button className="btn btn-success" width="20%">
          Thêm Sinh Viên
        </button>
      </div>
    </form>
  );
};

export default UserForm;
