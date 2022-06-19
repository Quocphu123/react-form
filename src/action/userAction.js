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

export const createUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://62ab04ea371180affbdf4975.mockapi.io/users",
        user
      );

      dispatch(getUser());
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
