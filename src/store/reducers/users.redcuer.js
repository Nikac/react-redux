import { GET_USERS, GET_ERROR, GET_USER } from "../actions/user.action";

const initialState = {
  users: [],
  errorMsg: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        users: state.users.find((u) => u.id === action.payload),
      };
    case GET_ERROR:
      return { ...state, errorMsg: action.payload };
    default:
      return { state };
  }
};
