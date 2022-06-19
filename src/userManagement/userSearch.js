import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeValue } from "../action/userAction";
const UserSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(changeValue(search));
  };

  return (
    <div className="d-flex justify-content-end mt-5">
      <input
        type="text"
        className="form-control"
        placeholder="Search user name"
        onChange={(evt) => setSearch(evt.target.value)}
      />
      <button
        className="btn btn-success"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default UserSearch;
