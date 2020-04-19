import {
  GET_USERS,
  GET_ERROR,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/user.action";

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
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      const users = state.users.filter(
        (u) => (u = u.id === action.payload.id ? action.payload : u)
      );
      return {
        ...state,
        users: users,
      };
    case DELETE_USER:
      const deletedUser = state.users.filter((u) => u.id !== action.payload);
      return {
        ...state,
        users: deletedUser,
      };
    case GET_ERROR:
      return { ...state, errorMsg: action.payload };
    default:
      return { state };
  }
};
