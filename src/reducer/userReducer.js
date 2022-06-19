const initialState = {
  users: [],
  selectedUser: null,
  searchValue: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.users };
    case "GET_USER_DETAIL":
      return { ...state, selectedUser: action.user };
    case "CHANGE_SEARCH_VALUE":
      return { ...state, searchValue: action.value };
    default:
      return state;
  }
};

export default userReducer;
