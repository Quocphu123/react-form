const initialState = {
  users: [],
  selectedUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.users };
    case "GET_USER_DETAIL":
      return { ...state, selectedUser: action.user };
    default:
      return state;
  }
};

export default userReducer;
