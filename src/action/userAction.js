import axios from "axios";

export const getUser = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        "https://62ab04ea371180affbdf4975.mockapi.io/users"
      );

      dispatch({ type: "GET_USERS", users: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (user, onSuccess) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://62ab04ea371180affbdf4975.mockapi.io/users",
        user
      );

      dispatch(getUser());
      onSuccess();
    } catch (error) {}
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://62ab04ea371180affbdf4975.mockapi.io/users/${userId}`
      );

      dispatch(getUser());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserDetail = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://62ab04ea371180affbdf4975.mockapi.io/users/${userId}`
      );

      dispatch({ type: "GET_USER_DETAIL", user: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (userId, user, onSuccess) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `https://62ab04ea371180affbdf4975.mockapi.io/users/${userId}`,
        user
      );

      dispatch(getUser());
      onSuccess();
    } catch (error) {}
  };
};
